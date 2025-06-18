document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enquiryForm");
    const thankYouMsg = document.getElementById("thankYouMsg");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const name = form.name.value;
  

      form.reset();
  
    
      thankYouMsg.textContent = `Thank you for your enquiry, ${name}! Your message has been received. 
      We'll get back to you shortly.<b> Have a great day<b>`;
      thankYouMsg.style.display = "block";
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;
    const slides = document.querySelectorAll(".slide");
  
    function displaySlide(n) {
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;
  
      slides.forEach((slide) => (slide.style.display = "none"));
      slides[slideIndex - 1].style.display = "block";
    }
  
    function autoAdvance() {
      displaySlide(slideIndex++);
      setTimeout(autoAdvance, 4000);
    }
  
    window.changeSlide = function(n) {
      displaySlide((slideIndex += n));
    };
  
    displaySlide(slideIndex);
    autoAdvance();
  });
  document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
  
    function showSlides() {
      slides.forEach((slide) => (slide.style.display = "none"));
  
      slideIndex++;
      if (slideIndex > slides.length) slideIndex = 1;
  
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4000); 
    }
  
    showSlides();
  });    
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");
  
    form.addEventListener("submit", function (e) {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!name || !email || !message) {
        e.preventDefault();
        feedback.textContent = "All fields are required.";
        feedback.style.color = "red";
        return;
      }
  
      if (!emailRegex.test(email)) {
        e.preventDefault();
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
        return;
      }
  
      feedback.textContent = "Sending message...";
      feedback.style.color = "blue";
    });
  });