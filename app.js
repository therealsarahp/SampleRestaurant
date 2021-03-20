window.onscroll = function() {stickNavBar()};

// Get the navbar
const navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// function myMap() {

//     const mapProp= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     };

//     // const uluru = { lat: -25.344, lng: 131.036 };

//     const map = new google.maps.Map(document.getElementById("map"),mapProp);

//     // const marker = new google.maps.Marker({
//     //     position: uluru,
//     //     map: map,
//     //   });

//     }