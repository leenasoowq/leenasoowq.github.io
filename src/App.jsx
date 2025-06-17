import { useEffect, useRef, useState } from 'react';
import Constellation from './Constellation';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  const containerRef = useRef(null);
  const isScrolling = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
       {
      title: "Digital & Tech Intern",
      company: "GlaxoSmithKline Singapore",
      date: "AUG 2025 - APR 2026",
      tags: ["Python"],
      bullets: [
        
      ]
    },
    {
      title: "Student AI Researcher",
      company: "Singapore Institute of Technology",
      date: "SEPT 2024 - MAY 2025",
      tags: ["PyTorch", "TensorFlow", "LSTM", "Temporal Fusion Transformer"],
      bullets: [
        "Led data collection and analysis for temperature prediction in Singapore, Solar PV generation, and EV charging demand forecasting",
        "Developed and deployed deep learning models using TensorFlow"
      ]
    },
    {
      title: "R&D Engineer",
      company: "New Valve Technology (Biosensors) Singapore",
      date: "AUG 2022 - AUG 2023",
       tags: [],
      bullets: []
    },
    {
      title: "Service Sales Intern",
      company: "BMEC Pte Ltd",
      date: "SEPT 2021 - FEB 2022",
      tags: [],
      bullets: []
    }
    
    // Add more experiences 
  ];
  const projects = [
    {
      title: "PV Generation Prediction",
      description: "Time series forecasting model for solar panel energy output using Temporal Fusion Transformer",
      tags: ["TensorFlow", "LSTM", "TFT"],
      // githubLink: "https://github.com/yourusername/pv-prediction",
      // demoLink: "#"
    },
  
    {
      title: "Defect Detection with White Light Interferometry",
      description: "Developed a computer vision system to detect defects in wafers using white light interferometry",
      tags: ["Python", "OpenCV", "Computer Vision"],

      // githubLink: "https://github.com/yourusername/pv-prediction",
      // demoLink: "#"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling.current) return;
      isScrolling.current = true;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const sections = Array.from(document.querySelectorAll('.section'));
      const currentScroll = container.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Find current section index
      let currentIndex = Math.round(currentScroll / windowHeight);
      currentIndex = Math.max(0, Math.min(currentIndex, sections.length - 1));
      
      // Calculate target index
      let targetIndex = currentIndex + direction;
      targetIndex = Math.max(0, Math.min(targetIndex, sections.length - 1));
      
      // Scroll to target section
      sections[targetIndex].scrollIntoView({
        behavior: 'smooth'
      });
      
      // Reset scroll lock after animation
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <section className="section hero-section">

        <div className="hero-image-container">
         <img 
          src="/images/hero_pic.jpg" 
          alt="Leena Soo"
          className="hero-image"
          loading="lazy"
          width="200"
          height="200"
        />
        </div>

        <div className="hero-content">
        <h1>Leena Soo</h1>
          <p className="title">Aspiring AI Engineer</p>
           {/* Replace contact button with social links */}
          <div className="social-links">
            <a 
              href="https://github.com/leenasoowq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="social-icon" />
            </a>
            <a 
              href="https://www.linkedin.com/in/leenaswq/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a 
              href="mailto:leenaswq@gmail.com" 
              className="social-link"
            >
              <FaEnvelope className="social-icon" />
            </a>
          </div>

         </div>
      </section>
    

      <section className="section about-me-section">
                <Constellation />
      <div className="about-me-content">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
          Hi! I am a penultimate student at Singapore Institute of Technology (SIT), 
          pursuing a Bachelor's Degree in Artificial Intelligence (AI). 
          My current expertise involves large Language Models (LLMs) as well as 
          building up my computer vision skills. I am passionate about integrating
          AI into the healthcare industry, particularly in the field of medical imaging. 
          I have a strong foundation in Python and I am proficient in using frameworks 
          like TensorFlow and PyTorch for AI development. 
          If I am not working infront of a computer, you can probably find me catching a flight to a new destination
          with beautiful scenery. I love to travel and explore new cultures,
          and I believe that experiencing different cultures can greatly enhance my perspective as an AI engineer.
          I am always eager to learn and grow, and I am excited about the future of AI and its potential to transform industries.
        </p>
      </div>
      </section>

       <section className="section experience-section">
        <Constellation />
        <div className="experience-content">
          <h2>EXPERIENCE</h2>
          <div className="experience-carousel">
            <div className="experience-card">
              <div className="experience-header">
                <h3>{experiences[activeIndex].title}</h3>
                <p className="company">{experiences[activeIndex].company}</p>
                <div className="tags">
                  {experiences[activeIndex].tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="experience-date">{experiences[activeIndex].date}</div>
              <ul className="experience-bullets">
                {experiences[activeIndex].bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="carousel-controls">
              <button 
                onClick={() => setActiveIndex(prev => (prev === 0 ? experiences.length - 1 : prev - 1))}
                className="carousel-button"
              >
                &lt;
              </button>
              <div className="carousel-dots">
                {experiences.map((_, i) => (
                  <span 
                    key={i} 
                    className={`dot ${i === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
              <button 
                onClick={() => setActiveIndex(prev => (prev === experiences.length - 1 ? 0 : prev + 1))}
                className="carousel-button"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <Constellation />
        <div className="education-content">
          <h2>EDUCATION</h2>
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-header">
                <h3>Bachelor of Science in Artificial Intelligence</h3>
                <p className="institution">Singapore Institute of Technology (SIT)</p>
                <p className="date">AUG 2023 - APR 2026 (Expected)</p>
              </div>
              <div className="education-details">
                <ul className="education-bullets">
                  <li>Specialisation in Large Language Models and Computer Vision</li>
                  <li>Relevant coursework: Deep Learning, Natural Language Processing</li>
                </ul>
                {/* <div className="education-tags">
                  <span className="tag">PyTorch</span>
                  <span className="tag">TensorFlow</span>
                  <span className="tag">Computer Vision</span>
                </div> */}
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-header">
                <h3>Diploma in Bioengineering</h3>
                <p className="institution">Singapore Polytechnic (SP)</p>
                <p className="date">APR 2019 - MAY 2022</p>
              </div>
              <div className="education-details">
                <ul className="education-bullets">
                  <li>Specialisation in Biomedical Engineering</li>
                  <li>Relevant coursework: Diagnostic Imaging Machines, Prosthetics, Medical Robots</li>
                </ul>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="section projects-section">
      <Constellation />
      <div className="projects-content">
        <h2>PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;
