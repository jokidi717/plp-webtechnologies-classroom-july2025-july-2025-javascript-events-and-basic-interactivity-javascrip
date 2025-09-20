// 🎉 Part 1: Event Handling
document.getElementById("toggleMessageBtn").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.style.display = (msg.style.display === "none") ? "block" : "none";
});

// 🎮 Part 2: Interactive Elements

// Light/Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  count--;
  document.getElementById("counter").textContent = count;
});

// 📋✅ Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = " Name is required";
    valid = false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = " Enter a valid email";
    valid = false;
  }

  // Password validation (min 6 characters)
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = " Password must be at least 6 characters";
    valid = false;
  }

  // If valid, show success
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Registration successful!";
    document.getElementById("signupForm").reset();
  }
});
