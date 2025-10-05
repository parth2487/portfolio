// // services-data.js
// const servicesData = {
//   web: {
//     category: "Web & Full-Stack Development",
//     readingTime: "6 min read",
//     title: "Web & Full-Stack Development",
//     description: "Building responsive and modern web applications using React.js, Java, Spring Boot, and Liferay. Focused on clean architecture and smooth performance.",
//     image: "assets/img/services/web-dev.webp",
//     benefits: [
//       { icon: "bi bi-lightning-charge", title: "Performance", text: "Optimized for speed and scalability." },
//       { icon: "bi bi-shield-check", title: "Secure", text: "Secure coding practices and authentication." },
//       { icon: "bi bi-graph-up", title: "Scalable", text: "Easily grows with your business needs." },
//       { icon: "bi bi-people", title: "Team Collaboration", text: "Integrated with modern team workflows." }
//     ],
//     timeline: [
//       { step: "1", title: "Discovery & Assessment", text: "Analyze requirements and plan the architecture.", duration: "Week 1-2" },
//       { step: "2", title: "Design & Planning", text: "Design database, UI, and API structures.", duration: "Week 3-4" },
//       { step: "3", title: "Implementation", text: "Develop frontend and backend services.", duration: "Week 5-12" },
//       { step: "4", title: "Testing & Deployment", text: "QA testing, bug fixing, and deployment.", duration: "Week 13-16" }
//     ],
//     overview: {
//       duration: "16",
//       efficiency: "85%",
//       support: "24/7",
//       investment: "$15K - $45K",
//       team: "3-5 Specialists",
//       industries: "Tech, Finance, E-Commerce"
//     },
//     client: {
//       quote: "This service transformed our online presence and improved team efficiency tremendously.",
//       author: "Jane Smith",
//       position: "CTO",
//       company: "TechCorp",
//       avatar: "assets/img/person/person-m-8.webp",
//       metrics: [
//         { value: "45%", label: "Cost Reduction" },
//         { value: "3x", label: "Speed Increase" }
//       ]
//     }
//   },

//   mobile: {
//     category: "Mobile App Development",
//     readingTime: "5 min read",
//     title: "Mobile App Development",
//     description: "Creating cross-platform mobile apps with React Native and hybrid frameworks, offering seamless integration and intuitive UI.",
//     image: "assets/img/services/mobile-dev.webp",
//     benefits: [
//       { icon: "bi bi-phone", title: "Responsive", text: "Optimized for all devices and OS." },
//       { icon: "bi bi-lightning-charge", title: "High Performance", text: "Smooth and fast app experience." },
//       { icon: "bi bi-people", title: "Collaboration", text: "Works with agile development teams." },
//       { icon: "bi bi-shield-check", title: "Secure", text: "Encrypted and safe mobile solutions." }
//     ],
//     timeline: [
//       { step: "1", title: "Requirements Gathering", text: "Understand client needs and platform goals.", duration: "Week 1" },
//       { step: "2", title: "Prototyping", text: "Design UI/UX and app flows.", duration: "Week 2-3" },
//       { step: "3", title: "Development", text: "Code frontend and backend mobile features.", duration: "Week 4-8" },
//       { step: "4", title: "Deployment & Maintenance", text: "Release to stores and ongoing support.", duration: "Week 9-12" }
//     ],
//     overview: {
//       duration: "12 Weeks",
//       efficiency: "90%",
//       support: "24/7",
//       investment: "$12K - $35K",
//       team: "2-4 Specialists",
//       industries: "Healthcare, Tech, Startups"
//     },
//     client: {
//       quote: "Our mobile app now delivers exceptional user experience across all platforms.",
//       author: "John Doe",
//       position: "Product Manager",
//       company: "AppTech",
//       avatar: "assets/img/person/person-m-7.webp",
//       metrics: [
//         { value: "50%", label: "Engagement Increase" },
//         { value: "2x", label: "Retention Rate" }
//       ]
//     }
//   }

//   // Add other services here (frontend, backend, UI/UX, etc.) using same structure
// };



// services-data.js
const servicesData = {
  web: {
    category: "Web & Full-Stack Development",
    readingTime: "6 min read",
    introText: "Delivering comprehensive web solutions tailored to enhance performance, scalability, and user experience across your digital platforms.",
    title: "Web & Full-Stack Development",
    description: "Building responsive and modern applications with MERN, MEAN, React.js, Java Spring Boot, and Liferay.Experienced in designing clean architectures, scalable APIs, and delivering smooth performance across web and cloud platforms.",
    image: "assets/img/full-stack.png",
    narrativeTitle: "Transform Your Web Projects",
    narrativeText: [
      "I help clients bring their ideas to life by building robust and scalable web applications tailored to their needs.",
      "From front-end design to backend architecture, I ensure your projects run efficiently and look professional."
    ],
    benefits: [
      { icon: "bi bi-lightning-charge", title: "Performance", text: "Optimized for speed and scalability." },
      { icon: "bi bi-shield-check", title: "Secure", text: "Secure coding practices and authentication." },
      { icon: "bi bi-graph-up", title: "Scalable", text: "Easily grows with your business needs." },
      { icon: "bi bi-people", title: "Team Collaboration", text: "Integrated with modern team workflows." }
    ],
    timeline: [
      { step: "1", title: "Discovery & Assessment", text: "Analyze requirements and plan the architecture.", duration: "Week 1-2" },
      { step: "2", title: "Design & Planning", text: "Design database, UI, and API structures.", duration: "Week 3-4" },
      { step: "3", title: "Implementation", text: "Develop frontend and backend services.", duration: "Week 5-12" },
      { step: "4", title: "Testing & Deployment", text: "QA testing, bug fixing, and deployment.", duration: "Week 13-16" }
    ],
    overview: {
      duration: "16",
      efficiency: "85%",
      support: "24/7",
      investment: "$15K - $45K",
      team: "3-5 Specialists",
      industries: "Tech, Finance, E-Commerce"
    },
    client: {
      quote: "This service transformed our online presence and improved team efficiency tremendously.",
      author: "Jane Smith",
      position: "CTO",
      company: "TechCorp",
      avatar: "assets/img/person/person-m-8.webp",
      metrics: [
        { value: "45%", label: "Cost Reduction" },
        { value: "3x", label: "Speed Increase" }
      ]
    }
  },

  mobile: {
    category: "Mobile Application Development",
    readingTime: "5 min read",
    title: "Mobile Application Development",
    introText: "I create cross-platform mobile applications with intuitive UI and seamless performance, delivering engaging experiences for users.",
    narrativeTitle: "Engage Users Anywhere",
    narrativeText: [
      "I develop mobile apps that provide smooth experiences across devices and platforms.",
      "My goal is to turn your ideas into interactive apps that delight users and meet business goals."
    ],

    description: "Creating cross-platform mobile applications with seamless performance, intuitive UI, and smooth integration, delivering engaging user experiences.",
    image: "assets/img/mobile-dev.png",
    benefits: [
      { icon: "bi bi-phone", title: "Responsive", text: "Optimized for all devices and OS." },
      { icon: "bi bi-lightning-charge", title: "High Performance", text: "Smooth and fast app experience." },
      { icon: "bi bi-people", title: "Collaboration", text: "Works with agile development teams." },
      { icon: "bi bi-shield-check", title: "Secure", text: "Encrypted and safe mobile solutions." }
    ],
    timeline: [
      { step: "1", title: "Requirements Gathering", text: "Understand client needs and platform goals.", duration: "Week 1" },
      { step: "2", title: "Prototyping", text: "Design UI/UX and app flows.", duration: "Week 2-3" },
      { step: "3", title: "Development", text: "Code frontend and backend mobile features.", duration: "Week 4-8" },
      { step: "4", title: "Deployment & Maintenance", text: "Release to stores and ongoing support.", duration: "Week 9-12" }
    ],
    overview: {
      duration: "12",
      efficiency: "90%",
      support: "24/7",
      investment: "$12K - $35K",
      team: "2-4 Specialists",
      industries: "Healthcare, Tech, Startups"
    },
    client: {
      quote: "Our mobile app now delivers exceptional user experience across all platforms.",
      author: "John Doe",
      position: "Product Manager",
      company: "AppTech",
      avatar: "assets/img/person/person-m-7.webp",
      metrics: [
        { value: "50%", label: "Engagement Increase" },
        { value: "2x", label: "Retention Rate" }
      ]
    }
  },

  backend: {
    category: "Backend Development",
    readingTime: "5 min read",
    title: "Backend Development",
    introText: "I design secure APIs, microservices, and server-side applications with a strong focus on performance and scalability.",
    narrativeTitle: "Build a Reliable Backend",
    narrativeText: [
      "I create backend systems that handle growing data and user demands efficiently.",
      "My solutions ensure security, reliability, and high performance for all your applications."
    ],
    description: "Designing secure APIs, microservices, and server-side applications with a focus on performance and scalability.",
    image: "assets/img/backend.png",
    benefits: [
      { icon: "bi bi-server", title: "Secure APIs", text: "Robust and secure backend services." },
      { icon: "bi bi-gear", title: "Microservices", text: "Flexible and modular architecture." },
      { icon: "bi bi-graph-up", title: "Scalable", text: "Handles growing user and data loads easily." },
      { icon: "bi bi-shield-check", title: "Reliable", text: "High availability and fault-tolerant design." }
    ],
    timeline: [
      { step: "1", title: "Requirement Analysis", text: "Understand system needs and API requirements.", duration: "Week 1-2" },
      { step: "2", title: "Database & API Design", text: "Design databases, APIs, and server-side logic.", duration: "Week 3-5" },
      { step: "3", title: "Development & Testing", text: "Develop services and perform unit/integration tests.", duration: "Week 6-10" },
      { step: "4", title: "Deployment & Monitoring", text: "Deploy services and implement monitoring.", duration: "Week 11-14" }
    ],
    overview: {
      duration: "14",
      efficiency: "88%",
      support: "24/7",
      investment: "$18K - $40K",
      team: "3-5 Specialists",
      industries: "Finance, E-Commerce, SaaS"
    },
    client: {
      quote: "The backend services provided ensured stable, secure, and scalable operations.",
      author: "Alice Johnson",
      position: "Backend Lead",
      company: "DataFlow Inc",
      avatar: "assets/img/person/person-m-6.webp",
      metrics: [
        { value: "60%", label: "Process Automation" },
        { value: "99.9%", label: "Uptime" }
      ]
    }
  },

  "cloud-devops": {
    category: "Cloud & DevOps",
    readingTime: "6 min read",
    title: "Scalable Cloud & DevOps Solutions",
    introText: "I design secure APIs, microservices, and server-side applications with a focus on scalability and performance, leveraging DevOps practices and cloud platforms for automated deployment, monitoring, and optimized reliability.",
    description: "Deploy and manage cloud applications with automation, monitoring, and CI/CD pipelines for optimized performance.",
    narrativeTitle: "Build a Reliable Backend",
    image: "assets/img/dev.png",
    narrativeText: [
      "I build backend systems that scale seamlessly on cloud platforms, handling growing data and user demands with efficiency.",
      "By applying DevOps practices like CI/CD, containerization, and monitoring, my solutions ensure security, reliability, and high performance for your applications."
    ],
    benefits: [
      { icon: "bi-cloud-check", title: "Infrastructure Automation", text: "Reduce manual work and errors." },
      { icon: "bi-speedometer", title: "Continuous Delivery", text: "Deploy updates faster and safely." },
      { icon: "bi-shield-check", title: "High Availability", text: "Ensure uptime and resilience." },
      { icon: "bi-currency-dollar", title: "Cost Optimization", text: "Efficient resource management." }
    ],
    timeline: [
      { step: "1", title: "Infrastructure Assessment", text: "Analyze current setup.", duration: "Week 1-2" },
      { step: "2", title: "Pipeline Design", text: "Implement CI/CD workflows.", duration: "Week 3-4" },
      { step: "3", title: "Cloud Deployment", text: "Deploy services on AWS/GCP/Azure.", duration: "Week 5-8" },
      { step: "4", title: "Monitoring & Optimization", text: "Fine-tune performance and scale.", duration: "Week 9-12" }
    ],
    overview: {
      duration: "12",
      efficiency: "92%",
      support: "24/7",
      investment: "$20K - $50K",
      team: "3-6 Specialists",
      industries: "FinTech, SaaS, E-Commerce"
    },
    client: {
      quote: "Cloud automation transformed our deployment speed and reduced downtime significantly.",
      name: "Sarah Lee",
      position: "DevOps Manager",
      company: "TechFlow",
      avatar: "assets/img/person/person-m-4.webp",
      metrics: [
        { value: "70%", label: "Deployment Speed" },
        { value: "99.9%", label: "Uptime" }
      ]
    }
  },

  "frontend-development": {
  "category": "Frontend Development",
  "readingTime": "5 min read",
  "title": "Responsive & High-Performance Frontend Development",
  image:"assets/img/front.png",
  "description": "Create engaging and intuitive user interfaces that perform seamlessly across all devices and browsers.",
  "introText": "I build user-friendly, fast, and responsive front-end applications that deliver an exceptional user experience.",
  "narrativeTitle": "Crafting Exceptional User Interfaces",
  "narrativeText": [
    "I design responsive and high-performing user interfaces that ensure a smooth user experience on all devices.",
    "My focus is on building interfaces that are not only visually appealing but also easy to navigate.",
    "I optimize front-end performance to ensure that your application loads quickly and runs smoothly, no matter the device."
  ],
  "benefits": [
    { "icon": "bi-phone", "title": "Responsive Design", "text": "Ensures your app works seamlessly across all devices." },
    { "icon": "bi-speedometer", "title": "High Performance", "text": "Optimized for fast loading times and smooth interactions." },
    { "icon": "bi-eye", "title": "Engaging UI", "text": "Visually appealing and user-centric designs that boost engagement." },
    { "icon": "bi-shield-check", "title": "Cross-Browser Compatibility", "text": "Ensures consistent performance across all major browsers." }
  ],
  "timeline": [
    { "step": "1", "title": "Requirement Gathering", "text": "Understand the project requirements and user needs.", "duration": "Week 1" },
    { "step": "2", "title": "UI/UX Design", "text": "Design wireframes, mockups, and user interfaces.", "duration": "Week 2-3" },
    { "step": "3", "title": "Development", "text": "Write clean, optimized front-end code using modern technologies.", "duration": "Week 4-6" },
    { "step": "4", "title": "Testing & Optimization", "text": "Conduct cross-browser testing and performance optimization.", "duration": "Week 7-8" },
    { "step": "5", "title": "Deployment & Monitoring", "text": "Deploy to production and monitor performance.", "duration": "Week 9+" }
  ],
  "overview": {
    "duration": "8-12",
    "efficiency": "90%",
    "support": "24/7",
    "investment": "$8K - $25K",
    "team": "2-4 Specialists",
    "industries": "Tech, E-Commerce, SaaS"
  },
  "client": {
    "quote": "The new frontend design improved user satisfaction and engagement significantly.",
    "name": "Sophie Turner",
    "position": "Product Manager",
    "company": "TechHive",
    "avatar": "assets/img/person/person-f-1.webp",
    "metrics": [
      { "value": "60%", "label": "User Engagement" },
      { "value": "40%", "label": "Bounce Rate Reduction" }
    ]
  }
},



"maintenance": {
  "category": "Maintenance & Support",
  "readingTime": "4 min read",
  "title": "Ongoing Maintenance & Support",
  "description": "Providing continuous technical support, bug fixes, performance improvements, and feature enhancements.",
  "introText": "I provide ongoing support and maintenance to ensure your systems remain secure, optimized, and up-to-date.",
  "narrativeTitle": "Keep Your Systems Healthy",
  image:"assets/img/mantance.png",
  "narrativeText": [
    "I ensure your apps and systems remain up-to-date, secure, and performing at their best.",
    "Regular maintenance and bug fixes to keep everything running smoothly.",
    "Performance monitoring to identify issues and optimize your system for speed and efficiency."
  ],
  "benefits": [
    { "icon": "bi-tools", "title": "Technical Support", "text": "24/7 assistance for your projects." },
    { "icon": "bi-shield-check", "title": "Security Updates", "text": "Protect against vulnerabilities." },
    { "icon": "bi-speedometer", "title": "Performance Monitoring", "text": "Identify and fix performance issues." },
    { "icon": "bi-people", "title": "Team Support", "text": "Expert support for your in-house teams." }
  ],
  "timeline": [
    { "step": "1", "title": "Initial Assessment", "text": "Audit systems for updates & fixes.", "duration": "Week 1" },
    { "step": "2", "title": "Ongoing Support", "text": "Regular maintenance and monitoring.", "duration": "Ongoing" },
    { "step": "3", "title": "Performance Tuning", "text": "Optimize system performance.", "duration": "Monthly" },
    { "step": "4", "title": "Reporting & Feedback", "text": "Provide metrics and improvement recommendations.", "duration": "Quarterly" }
  ],
  "overview": {
    "duration": "Ongoing",
    "efficiency": "95%",
    "support": "24/7",
    "investment": "$5K - $15K/month",
    "team": "2-4 Specialists",
    "industries": "Tech, E-Commerce, Healthcare"
  },
  "client": {
    "quote": "Continuous maintenance helped our system stay secure and reliable.",
    "name": "Mark Wilson",
    "position": "IT Director",
    "company": "SecureTech",
    "avatar": "assets/img/person/person-m-5.webp",
    "metrics": [
      { "value": "99%", "label": "Uptime" },
      { "value": "80%", "label": "Issue Resolution Rate" }
    ]
  }
},


  "api-integration": {
    "category": "API Integration & Microservices",
    "readingTime": "5 min read",
    "title": "Robust API & Microservices Integration",
    "description": "Integrate third-party APIs and build microservices for smooth communication between distributed systems.",
    "introText": "I integrate third-party APIs and build scalable microservices that ensure seamless communication between systems.",
    "narrativeTitle": "Connect Systems Seamlessly",
    image:"assets/img/api.png",
    "narrativeText": [
      "I design and implement microservices that communicate efficiently with each other.",
      "I integrate external APIs to enhance the functionality of your application and ensure smooth data exchange.",
      "My goal is to create a modular, scalable backend that adapts to your growing business needs."
    ],
    "benefits": [
      { "icon": "bi-plug", "title": "Third-Party API Integration", "text": "Connect with external platforms easily." },
      { "icon": "bi-server", "title": "Microservices Architecture", "text": "Scalable and modular backend." },
      { "icon": "bi-shield-check", "title": "Secure Communication", "text": "Encrypted API calls and authentication." },
      { "icon": "bi-speedometer", "title": "High Performance", "text": "Optimized service response times." }
    ],
    "timeline": [
      { "step": "1", "title": "Requirement Analysis", "text": "Identify APIs and services to integrate.", "duration": "Week 1-2" },
      { "step": "2", "title": "Service Design", "text": "Plan microservices architecture.", "duration": "Week 3-4" },
      { "step": "3", "title": "Implementation", "text": "Develop APIs and microservices.", "duration": "Week 5-8" },
      { "step": "4", "title": "Testing & Deployment", "text": "QA testing and production deployment.", "duration": "Week 9-10" }
    ],
    "overview": {
      "duration": "10",
      "efficiency": "95%",
      "support": "24/7",
      "investment": "$15K - $40K",
      "team": "4-6 Specialists",
      "industries": "Finance, E-Commerce, Healthcare"
    },
    "client": {
      "quote": "Our systems now communicate seamlessly and integrate multiple APIs effortlessly.",
      "name": "Emma Johnson",
      "position": "Backend Lead",
      "company": "IntegrateX",
      "avatar": "assets/img/person/person-m-6.webp",
      "metrics": [
        { "value": "99%", "label": "Service Uptime" },
        { "value": "50%", "label": "Integration Efficiency" }
      ]
    }
  },


  // Add these inside the servicesData object

  "ui-ux": {
    category: "UI/UX & Responsive Design",
    readingTime: "4 min read",
    title: "User-Centered Design & Responsive Interfaces",
    description: "Design intuitive interfaces that adapt seamlessly across devices while focusing on user experience.",
    introText: "I design intuitive and responsive interfaces that prioritize user experience across devices.",
    narrativeTitle: "Design for People",
    image: "assets/img/ui.jfif",
    narrativeText: [
      "I create wireframes, prototypes, and designs that are visually appealing and user-friendly.",
      "My goal is to enhance usability and engagement for every project I work on."
    ],
    benefits: [
      { icon: "bi-pencil", title: "Intuitive Design", text: "User-friendly and easy-to-navigate interfaces." },
      { icon: "bi-phone", title: "Responsive Layouts", text: "Perfect display on mobile, tablet, and desktop." },
      { icon: "bi-speedometer", title: "Performance Focused", text: "Optimized designs for fast loading." },
      { icon: "bi-people", title: "User Engagement", text: "Improved retention through excellent UX." }
    ],
    timeline: [
      { step: "1", title: "Research & Analysis", text: "Understand user needs and goals.", duration: "Week 1" },
      { step: "2", title: "Wireframing & Prototyping", text: "Create layouts and interactive prototypes.", duration: "Week 2-3" },
      { step: "3", title: "Visual Design", text: "Design graphics, typography, and color schemes.", duration: "Week 4" },
      { step: "4", title: "Testing & Refinement", text: "Usability testing and iterations.", duration: "Week 5" }
    ],
    overview: {
      "duration": "5-8",
      "efficiency": "85%",
      "support": "24/7",
      "investment": "$8K - $20K",
      "team": "2-3 Designers",
      "industries": "E-Commerce, Media, Education"
    },
    client: {
      quote: "The redesign improved usability and increased user satisfaction across all platforms.",
      name: "Olivia Martinez",
      position: "Design Lead",
      company: "CreativeTech",
      avatar: "assets/img/person/person-m-7.webp",
      metrics: [
        { value: "50%", label: "User Engagement" },
        { value: "30%", label: "Bounce Rate Reduction" }
      ]
    }
  },

  "database-integration": {
    "category": "Database Design & Integration",
    "readingTime": "5 min read",
    introText: "I design and integrate scalable, secure databases that ensure fast, reliable data access for your applications.",
    "title": "Efficient Database Design & Integration",
    "description": "Design and integrate scalable, secure, and high-performance databases for web and mobile applications.",
    "narrativeTitle": "Optimize Your Data Flow",
    "image": "assets/img/data-design.png",
    "narrativeText": ["We create normalized databases, optimize queries, and integrate them with your application backend to ensure fast and reliable data access."],
    "benefits": [
      { "icon": "bi-server", "title": "Scalable Databases", "text": "Handles growth and heavy traffic efficiently." },
      { "icon": "bi-shield-check", "title": "Secure Data", "text": "Implement best security practices for sensitive data." },
      { "icon": "bi-speedometer", "title": "Optimized Performance", "text": "Efficient queries and indexing for speed." },
      { "icon": "bi-plug", "title": "Seamless Integration", "text": "Connect databases smoothly with backend services." }
    ],
    "timeline": [
      { "step": "1", "title": "Requirement Analysis", "text": "Understand data needs and relationships.", "duration": "Week 1" },
      { "step": "2", "title": "Database Design", "text": "Schema design, normalization, and indexing.", "duration": "Week 2-3" },
      { "step": "3", "title": "Integration & Testing", "text": "Connect with backend services and test queries.", "duration": "Week 4-5" },
      { "step": "4", "title": "Optimization & Maintenance", "text": "Optimize queries and ensure ongoing performance.", "duration": "Week 6+" }
    ],
    "overview": {
      "duration": "6-8",
      "efficiency": "90%",
      "support": "24/7",
      "investment": "$10K - $25K",
      "team": "3-5 Specialists",
      "industries": "Finance, Healthcare, E-Commerce"
    },
    "client": {
      "quote": "The database integration greatly improved performance and reliability of our applications.",
      "name": "David Kim",
      "position": "CTO",
      "company": "DataSolutions",
      "avatar": "assets/img/person/person-m-8.webp",
      "metrics": [
        { "value": "70%", "label": "Query Speed Improvement" },
        { "value": "99%", "label": "Data Reliability" }
      ]
    }
  }


};
