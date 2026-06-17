// ===============================
// EASY EVENT HIRE JAVASCRIPT
// ===============================

// Highlight current page in navigation
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "Blue";
    }
});

// Form Validation
const enquiryForm = document.querySelector("form");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        // Check for empty fields
        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            phone.value.trim() === "" ||
            message.value.trim() === ""
        ) {
            alert("Please complete all fields.");
            event.preventDefault();
            return;
        }

        // Validate phone number
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone.value)) {
            alert("Please enter a valid 10-digit phone number.");
            event.preventDefault();
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        alert("Thank you! Your enquiry has been submitted.");

        // Optional: reset form after submission
        enquiryForm.reset();

        event.preventDefault();
    });
}

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Welcome Message on Homepage
if (currentPage === "index.html" || currentPage === "") {
    console.log("Welcome to Easy Event Hire!");
}