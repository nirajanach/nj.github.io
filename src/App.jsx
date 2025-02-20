import React, { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented features like user authentication, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates using Socket.io and React. Features include task assignment, status tracking, and team chat.",
      tags: ["React", "Socket.io", "Redux", "Node.js"]
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created an interactive dashboard for visualizing complex datasets using D3.js and React. Implemented various chart types and filtering capabilities.",
      tags: ["React", "D3.js", "TypeScript", "Material-UI"]
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "SQL", "MongoDB", "AWS", "Docker", "Git"
  ];

  const experiences = [
    {
      company: "Interactive Experiences",
      role: "Junior Software Developer & Project Assistant",
      period: "2024 November - Present",
      description: "Lead developer for multiple client projects, mentoring junior developers, and implementing best practices."
    },
    {
      company: "MVP Studio",
      role: "Software Developer",
      period: "2018 - 2020",
      description: "Developed and maintained web applications using React and Node.js."
    }
  ];

  return (
    <div className="min-h-screen bg-teal-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-teal-800">Nirajan Acharya (NJ)</div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-teal-600 hover:text-teal-800 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-teal-600 hover:text-teal-800">About</a>
              <a href="#projects" className="text-teal-600 hover:text-teal-800">Projects</a>
              <a href="#experience" className="text-teal-600 hover:text-teal-800">Experience</a>
              <a href="#contact" className="text-teal-600 hover:text-teal-800">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-teal-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-teal-600 hover:text-teal-800">About</a>
              <a href="#projects" className="block px-3 py-2 text-teal-600 hover:text-teal-800">Projects</a>
              <a href="#experience" className="block px-3 py-2 text-teal-600 hover:text-teal-800">Experience</a>
              <a href="#contact" className="block px-3 py-2 text-teal-600 hover:text-teal-800">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 bg-gradient-to-b from-teal-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
              Software Developer
            </h1>
            <p className="text-xl text-teal-600 mb-8">
              Building elegant solutions to complex problems
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/nirajanach" className="text-teal-600 hover:text-teal-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/nirajanach/" className="text-teal-600 hover:text-teal-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-green-50 text-teal-700 rounded-full border border-teal-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-teal-100">
                <h3 className="text-xl font-bold text-teal-800 mb-3">{project.title}</h3>
                <p className="text-teal-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-green-50 text-teal-600 text-sm rounded-full border border-teal-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-teal-400 pl-4">
                <h3 className="text-xl font-bold text-teal-800">{exp.role}</h3>
                <p className="text-teal-600 mb-2">{exp.company} | {exp.period}</p>
                <p className="text-teal-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Contact</h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:nirajanach@gmail.com" className="flex items-center text-teal-600 hover:text-teal-800">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>nirajanach@gmail.com</span>
            </a>
            <a href="tel:+61449710811" className="flex items-center text-teal-600 hover:text-teal-800">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0449 710 811</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-teal-50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Nirajan Acharya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;