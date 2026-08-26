import "./App.css";

function App() {
  return (
    <div className="app notranslate" translate="no">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">/ profile</div>

        <div className="status">
          <span className="status-dot"></span>
          <span>online</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            Rianda Rizky Rullah
          </div>

          <h1>
            RIAN,
            <br />
            <span>HELLO.</span>
          </h1>

          <p className="hero-text">
            Web developer.
            <br />
            Building things on the internet.
          </p>

          <button
            className="main-button"
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>VIEW PROFILE</span>
            <span className="button-arrow">↗</span>
          </button>
        </div>

        <div className="hero-decoration">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="year">aLL</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="message-section visible" id="about">
        <div className="section-label">
          01 / ABOUT ME
        </div>

        <div className="message-card">
          <div className="message-header">
            <span>PROFILE</span>
            <span>INDONESIA</span>
          </div>

          <div className="message-content">
            <h2>
              Hello.
              <br />
              <span>I'm Rian.</span>
            </h2>

            <p className="typing-text">
              I am a web developer who enjoys creating clean,
              simple, and interactive websites.
              I love transforming ideas into something visual,
              functional, and user-friendly.
            </p>

            <div className="signature">
              — junior web developer
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="things-section">
        <div className="section-label">
          02 / WHAT I DO
        </div>

        <div className="things-grid">
          <article className="thing-card">
            <div className="thing-number">01</div>

            <h3>UI / UX</h3>

            <p>
              I like minimal interfaces that look
              simple but still have personality.
            </p>
          </article>

          <article className="thing-card">
            <div className="thing-number">02</div>

            <h3>Frontend</h3>

            <p>
              Building responsive interfaces with
              clean layouts, animations, and attention
              to small details.
            </p>
          </article>

          <article className="thing-card">
            <div className="thing-number">03</div>

            <h3>Backend</h3>

            <p>
              Developing robust systems
              with scalable databases, secure APIs,
              and efficient data processing.
            </p>
          </article>

          <article className="thing-card">
            <div className="thing-number">04</div>

            <h3>Database</h3>

            <p>
              Structuring reliable data storage,
              ensuring high availability,
              and maintaining strict data integrity.
            </p>
          </article>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="memory-section">
        <div className="section-label">
          03 / PROJECTS
        </div>

        <div className="memory-heading">
          <h2>
            Several
            <br />
            <span>projects.</span>
          </h2>

          <p>
            Things I've built.
            <br />
            More coming soon.
          </p>
        </div>

        <div className="photo-grid">
          {/* PROJECT 01 */}
          <div className="photo-card photo-large">
            <img
              src="/project1.png"
              alt="Project 01"
            />

            <div className="project-info">
              <span>PROJECT 01</span>
              <small>PERSONAL WEBSITE</small>
            </div>
          </div>

          <div className="photo-column">
            {/* PROJECT 02 */}
            <div className="photo-card">
              <img
                src="/project2.png"
                alt="Project 02"
              />

              <div className="project-info">
                <span>PROJECT 02</span>
                <small>BACKEND/DATABASE</small>
              </div>
            </div>

            {/* PROJECT 03 */}
            <div className="photo-card">
              <img
                src="/project3.png"
                alt="Project 03"
              />

              <div className="project-info">
                <span>PROJECT 03</span>
                <small>WEB EXPERIMENT</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section className="final-section">
        <div className="final-line"></div>

        <div className="final-small">
          LET'S CONNECT
        </div>

        <h2>
          Say
          <br />
          Hello.
        </h2>

        <p>
          Want to discuss a project or just have a chat?
          <br />
          Please get in touch.
        </p>

        {/* SOCIAL ICONS */}
        <div className="social-links">
          {/* GITHUB */}
          <a
            href="https://github.com/miyay-r"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.13 2.92.86.09-.67.35-1.13.63-1.39-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.23 9.23 0 0 1 12 7.18c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
              />
            </svg>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/reyriannn"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85C21 10.08 19 8.1 15.95 8.1c-1.43 0-2.4.78-2.8 1.49V8.5H9.65V21h3.5v-6.18c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.86 2.02 3.32V21H21v-7.15Z"
              />
            </svg>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/yai.ryn/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                className="instagram-dot"
              />
            </svg>
          </a>
        </div>

        <div className="footer-text">
          built with React / 2026
        </div>
      </section>
    </div>
  );
}

export default App;