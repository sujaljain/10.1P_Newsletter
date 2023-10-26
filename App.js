import React, { useState } from "react";
import './App.css';
import facebook from "./Components/facebook.png";
import instagram from "./Components/instagram.jpg";
import twitter from "./Components/twitter.png";

const App = () => {
  const [email, setEmail] = useState(""); // Define email and setEmail using the useState hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a JSON object with the form data
    const data = { email: email };

    // Send a POST request to the backend
    fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message); // Log the response from the server
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the 'email' state when the input field changes
  };

  return (
    <>
      <div className="newsletter">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with the latest news and updates.</p>
          <form action="/subscribe" method="POST" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email} // Bind the value of the input field to the 'email' state
                onChange={handleEmailChange} // Handle changes to the input field
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="footer1">
          <div className="Explore">
            <h2>Explore</h2>
            <ul>
              <li>Home</li>
              <li>Questions</li>
              <li>Articles</li>
              <li>Tutorials</li>
            </ul>
          </div>
          <div className="Support">
            <h2>Support</h2>
            <ul>
              <li>FAQ'S</li>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="Socials">
            <h2>Stay Connected</h2>
            <ul>
              <li>
                <img src={instagram} alt="" className="logo" />
              </li>
              <li>
                <img src={facebook} alt="" className="logo" />
              </li>
              <li>
                <img src={twitter} alt="" className="logo" />
              </li>
            </ul>
          </div>
        </div>
        <h2 className="center-heading">Dev@Deakin 2023</h2>
        <br />
        <div className="footer2">
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Code Of Conduct</li>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default App;