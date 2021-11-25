const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
 
// Displaying mobile menu when we click the toggle.
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const initiativesMenu = document.querySelector('#initiatives-page');
  const galleryMenu = document.querySelector('#gallery-page');
  const askMenu = document.querySelector('#ask-page');
  let scrollPos = window.scrollY;

  // Logic for highlighting menu items.
  if (window.innerWidth > 960 && scrollPos < 750) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1450) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    initiativesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2290) {
    initiativesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    galleryMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3500) {
    galleryMenu.classList.add('highlight');
    initiativesMenu.classList.remove('highlight');
    askMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 4600) {
    askMenu.classList.add('highlight');
    galleryMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

// Calling highlightMenu function.
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Closing mobile menu when we click on a menu item.
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function myFunction() {
  var askForm=document.getElementById('askForm');
  var fname=document.getElementById('fname').value;
  var lname=document.getElementById('lname').value;
  var subject=document.getElementById('subject').value;
  if(fname != '' && lname != '' && subject != ''){
    askForm.reset();
    alert("Your query has been submitted!");
  }
}