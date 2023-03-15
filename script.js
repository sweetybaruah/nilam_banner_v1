// Get the element you want to animate
const element_1 = document.querySelector('.element_1');
const element_3 = document.querySelector('.element_3');
const element_4 = document.querySelector('.element_4');
const element_5 = document.querySelector('.element_5');
const element_6 = document.querySelector('.element_6');
const element_7 = document.querySelector('.element_7');
const container = document.querySelector('#container');

// Define the animation timeline
const tl = gsap.timeline({ repeat: -1 });

// Add the scale-up animation
tl.to(element_1, { duration: 0.5, scale: 1.1, ease: 'power1.inOut' });

// Add the scale-down animation, with a slight delay to create a pause at the top of the pulse
tl.to(element_1, { duration: 0.5, scale: 1, ease: 'power1.inOut', delay: 0.1 });

gsap.fromTo('.element_3', {
    duration: 1,
    opacity: 0.7,
    scale: 0.8,
    transformOrigin: 'center center', // Set the transform origin to the center
    ease: 'power2.inOut',},{duration: 2, opacity: 1, scale: 1, repeat: 1}
  );

element_1.addEventListener('click', function() {
    gsap.to([element_1, element_3], { duration: 0, opacity: 0, display: 'none' });
    gsap.fromTo(element_4,{ opacity: 0, display: 'none', x: -100 },{ duration: 1, opacity: 1, display: 'block', x: 0 });
    gsap.fromTo(element_6, { opacity: 0, display: 'none' }, { duration: 1, delay: 1, opacity: 1, display: 'block'});
    gsap.fromTo(element_5, { x: '301', display: 'block' }, { duration: 1, x: '0%', display: 'block' , delay: 1.5, overflow: 'hidden'});

    const t2 = new TimelineMax({ 
        repeat: -1,
        repeatDelay: 0.05 //delay the repeat by 0.05 seconds so that it's a total of 1 second long (last stagger is delayed 0.45 seconds, and the tween is 0.5 seconds long = 0.95 seconds total)
    }); 
    
    t2.staggerFromTo(
        'span',   //target (all span tags)
         0.5,     //duration (0.5 seconds)
         {x:10},   //"from" values
         {x:50},  //"to" values
         -0.15    //stagger amount (seconds between each start time)
    );
    
    // Hide the staggered elements after a delay
    gsap.to('span', { opacity: 0, display: 'none', delay: 5 });
    
    // Show element_7 after a delay
    gsap.fromTo(element_7, { opacity: 0, display: 'none' }, { duration: 1, delay: 6, opacity: 1, display: 'block'});

    gsap.to(['.element_2', element_4, element_5, element_6, element_7], { duration: 0, opacity: 0, display: 'none' , delay: 7});
    gsap.fromTo(element_3,{ opacity: 0, display: 'none'},{ duration: 1, opacity: 1, display: 'block', delay:7.2});
    gsap.fromTo('.element_9',{ opacity: 0, display: 'none'},{ duration: 1, opacity: 1, display: 'block', delay:7.5});
    gsap.fromTo('.element_8', {display: 'none'}, {display: 'block', duration: 0.8, scale: 1.1, ease: 'power1.inOut',  delay:7.5, repeat: -1});      
});
