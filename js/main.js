$(document).ready(function(){
    var scroll = new SmoothScroll('a[href*="#"]');
    
});
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav-bar').outerHeight();
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});
// run hasScrolled() and reset didScroll status after 250ms
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);


function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop -st) <= delta){
      return;
  }

    // If current position > last position AND scrolled past navbar...
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
      $('.nav-bar').removeClass('nav-bar--shown').addClass('nav-bar--hidden');
  } else {
    // Scroll Up
    // If did not scroll past the document (possible on mac)...
    if(st + $(window).height() < $(document).height()) { 
      $('.nav-bar').removeClass('nav-bar--hidden').addClass('nav-bar--shown');
    }
  }
  lastScrollTop = st;
}