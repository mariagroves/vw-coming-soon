/*Custom JavaScript*/
$(function(){
  // Activate wow.js
  new WOW().init();
});

$(document).ready(function(){
  $(this).scrollTop(0);
});


const links = document.querySelectorAll('.navbar__link');
const webApp = document.getElementById('webapp');
const home = document.getElementById('home');
const involved = document.getElementById('involved');
const rider = document.getElementById('rider');
const lapFooter = document.getElementById('lap-footer');
const mobFooter = document.getElementById('mob-footer');

function myFunction(x) {
  if (x.matches) { // If media query matches
    webApp.style.display = "block";
    home.style.display = "block";
    involved.style.display = "block";
    rider.style.display = "block";
    mobFooter.style.display = "block"
  } else {
    lapFooter.style.display = "block"
  }
}

var x = window.matchMedia("(max-width: 1199px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

links.forEach((link) => {
  link.addEventListener('click', ()=> {
    if (link.innerText == "WEB APP") {
      webApp.style.display = "block";
      home.style.display = "none";
      involved.style.display = "none";
      rider.style.display = "none";
    } else if (link.innerText == "HOME") {
      webApp.style.display = "none";
      home.style.display = "block";
      involved.style.display = "none";
      rider.style.display = "none";
    } else if (link.innerText == "GET INVOLVED") {
      webApp.style.display = "none";
      home.style.display = "none";
      involved.style.display = "block";
      rider.style.display = "none";
    } else if (link.innerText == "RIDERS") {
      webApp.style.display = "none";
      home.style.display = "none";
      involved.style.display = "none";
      rider.style.display = "block";
    }
  })
})



