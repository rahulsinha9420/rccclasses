* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f5faff;
  color: #333;
  line-height: 1.6;
}

header {
  background: #0077cc;
  color: white;
  padding: 1rem 0;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

nav a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

.hero {
  background: linear-gradient(to right, #e0f7fa, #b2ebf2);
  text-align: center;
  padding: 3rem 1rem;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero button {
  padding: 0.75rem 1.5rem;
  background: #0077cc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.hero button:hover {
  background: #005fa3;
}

.courses, .about, .contact {
  padding: 2rem 1rem;
  text-align: center;
}

.courses h3, .about h3, .contact h3 {
  margin-bottom: 1.5rem;
  color: #0077cc;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.card {
  background: white;
  border: 1px solid #ddd;
  padding: 1.5rem;
  width: 250px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.05);
}

footer {
  background: #004c99;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  nav {
    margin-top: 1rem;
  }

  .card-grid {
    flex-direction: column;
    align-items: center;
  }
}

.book-seat {
  background: linear-gradient(to right, #e3f2fd, #c8e6c9);
  padding: 2rem 1rem;
  text-align: center;
}

.book-seat h2 {
  font-size: 2rem;
  color: #0077cc;
  margin-bottom: 0.5rem;
}

.book-seat p {
  margin-bottom: 1.5rem;
  color: #444;
}

.book-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.book-btn {
  padding: 0.8rem 1.5rem;
  background: #0077cc;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.book-btn:hover {
  background: #005fa3;
}

.book-btn.whatsapp {
  background: #25d366;
}

.book-btn.whatsapp:hover {
  background: #1ebc57;
}

.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: #25d366;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}
