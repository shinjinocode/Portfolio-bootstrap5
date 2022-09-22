let navbar = document.getElementById("navbarComplete")
let scrollTopButton = document.getElementById("scroll-top-button")

window.onscroll = function(){
  if(window.pageYOffset>300){
    navbar.classList.remove("bg-transparent", "navbar-light");
    navbar.classList.add("bg-dark", "navbar-dark");
    scrollTopButton.classList.add("show")
  }
  else {
    navbar.classList.add("bg-transparent", "navbar-light");
    navbar.classList.remove("bg-dark", "navbar-dark");
    scrollTopButton.classList.remove("show")
  }
}





