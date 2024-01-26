console.log("Sanzero Designbyrå!");
console.log("O-Hansens Eftf as");
console.log("Live?");


window.onload = function() {
    var logoSpan = document.getElementById('logo-elfag');
    if (logoSpan) {
      var img = document.createElement('img');
      img.src = 'https://uploads-ssl.webflow.com/659ddd2f0bbf83eebcc3871e/65b25e7ba35e64fd217e8e08_elfag_footer_logo-white.png'; // Replace with your image URL
      img.id = 'logo-elfag'; // Adding the same ID to the img
      logoSpan.parentNode.replaceChild(img, logoSpan);
    }
  };
