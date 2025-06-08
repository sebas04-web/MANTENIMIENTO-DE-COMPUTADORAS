document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Cambiar clase activa en navegación
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Desplazamiento suave
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sistema de pestañas para módulos
    const moduleTabs = document.querySelectorAll('.module-tab');
    
    moduleTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover clase activa de todas las pestañas
            moduleTabs.forEach(t => t.classList.remove('active'));
            
            // Añadir clase activa a la pestaña clickeada
            this.classList.add('active');
            
            // Ocultar todos los contenidos de módulos
            document.querySelectorAll('.module-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Mostrar el contenido correspondiente
            const moduleId = this.getAttribute('data-module');
            const moduleContent = document.getElementById(moduleId);
            
            if (moduleContent) {
                moduleContent.classList.add('active');
                
                // Animación de entrada
                moduleContent.style.opacity = '0';
                moduleContent.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    moduleContent.style.opacity = '1';
                    moduleContent.style.transform = 'translateY(0)';
                    moduleContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                }, 50);
            }
        });
    });
    
    // Efecto hover en tarjetas
    const cards = document.querySelectorAll('.detail-card, .member-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
    
    // Animación al cargar la página
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.hero-section, .project-section, .modules-section, .evaluation-section, .team-section');
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    };
    
    // Establecer estilos iniciales para animación
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Mostrar la primera sección inmediatamente
    document.querySelector('.hero-section').style.opacity = '1';
    document.querySelector('.hero-section').style.transform = 'translateY(0)';
    
    // Evento de scroll para animaciones
    window.addEventListener('scroll', animateOnScroll);
    
    // Inicializar animaciones al cargar
    animateOnScroll();
    
    // Manejo del botón "Iniciar Módulo"
    const startModuleButtons = document.querySelectorAll('.start-module-btn');
    
    startModuleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moduleTitle = this.closest('.module-content').querySelector('h3').textContent;
            
            // Mostrar modal de confirmación
            if (confirm(`¿Estás listo para comenzar el módulo "${moduleTitle}"?`)) {
                // Aquí podrías redirigir a una página específica del módulo
                alert(`Módulo "${moduleTitle}" iniciado. ¡Buena suerte!`);
                
                // Registrar en consola para propósitos de demostración
                console.log(`Módulo iniciado: ${moduleTitle}`);
            }
        });
    });
    
    // Simular carga de datos para el proyecto (podría ser reemplazado por una llamada API real)
    function loadProjectData() {
        // Datos simulados que podrían venir de una API
        const projectData = {
            title: "Software Didáctico Multimedia",
            description: "Herramienta educativa para enseñanza de mantenimiento de computadoras",
            objectives: {
                general: "Crear un software educativo que apoye la enseñanza del mantenimiento preventivo y correctivo de computadoras",
                specifics: [
                    "Evaluar la efectividad del software multimedia",
                    "Seleccionar herramientas y recursos multimedia adecuados",
                    "Implementar material de apoyo para el área de informática"
                ]
            },
            team: [
                {
                    name: "Stalin Sebastián Inga Anangono",
                    role: "Desarrollador",
                    ci: "1751714427"
                },
                {
                    name: "Ricardo Fabiano Napa Navas",
                    role: "Desarrollador",
                    ci: "1753622586"
                },
                {
                    name: "Lic. Edison Paucar",
                    role: "Docente Asesor"
                }
            ]
        };
        
        // Aquí podrías usar estos datos para actualizar la UI dinámicamente
        console.log('Datos del proyecto cargados:', projectData);
    }
    
    // Cargar datos del proyecto
    loadProjectData();
    
    // Manejar el estado activo de la navegación al hacer scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});