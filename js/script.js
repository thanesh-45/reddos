// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Thank you for contacting Reddos Tech Services! We will reach out soon."
    );

    this.reset();
});


// Navbar Shadow On Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.15)";
    }
    else{
        navbar.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.1)";
    }

});