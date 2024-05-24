import React, { useState } from 'react';
import styles from './Hamburger.module.scss'

export const Hamburger = ({refs}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <div className={`${styles.hamburgerMenu}`} onClick={toggleMenu}>
        {!isOpen ? (
            <>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </>
        ):(
            <>
                <div className={styles.open}></div>
                <div className={styles.open}></div>
            </>
        )}
      {isOpen && 
        <ul className={styles.items}>
             <li onClick={() => handleScroll(refs.homeRef)}>Home</li>
            <li onClick={() => handleScroll(refs.servicesRef)}>Services</li>
            <li onClick={() => handleScroll(refs.coursesRef)}>Courses</li>
            <li onClick={() => handleScroll(refs.FAQRef)}>FAQ</li>
            <li onClick={() => handleScroll(refs.ContactRef)}>Contact Us</li>
        </ul> 
      }
    </div>
  );
};

