import { useState } from "react";

// Contact page component
function ContactPage(props) {

  // use states to handle user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // handles submit event 
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      name,
      email,
      message
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  // handles events when changes are made to the input elements
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  // handles validation of each input element, is called by the onBlur input property when input loses focus
  const handleValidation = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !value) {
      setErrorMessage("Name is required");
    } else if (name === "email" && !value) {
      setErrorMessage("Email is required");
    } else if (name === "email")  {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else if (name === "message" && !value) {
      setErrorMessage("Message is required");
    } else {
      setErrorMessage("");
    }
  };
return (
  <div className="container p-5">
  <h1 className="text-start mb-4">Contact</h1>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Add your name"
        value={name}
        name="name"
        className="form-control"
        onBlur={handleValidation}
        onChange={handleChange}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address:</label>
      <input
        type="text"
        id="email"
        placeholder="Add your email"
        value={email}
        name="email"
        className="form-control"
        onBlur={handleValidation}
        onChange={handleChange}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="message" className="form-label">Message:</label>
      <textarea
        id="message"
        placeholder="Add your message"
        value={message}
        name="message"
        className="form-control"
        onBlur={handleValidation}
        onChange={handleChange}
      ></textarea>
    </div>
    {errorMessage && (
      <div className="error-message">{errorMessage}</div>
    )}
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
  ) 
}


export default ContactPage;