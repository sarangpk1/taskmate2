import React, { useEffect, useState } from 'react'
import Logo from '../assets/sannatalogo.png'

export const Header = () => {

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
}, [theme]);

  return (
    <header>
        <div className='logo'>
            <img src={Logo} alt="logo" />
            <span>Sannata TaskManager</span>
        </div>
        <div className='themeSelect'>
            <span className={theme==='light'? 'light activeTheme' : "light"} onClick={() => setTheme("light")}></span>
            <span className={theme==='medium'? 'medium activeTheme' : "medium"} onClick={() => setTheme("medium")}></span>
            <span className={theme==='dark'? 'dark activeTheme' : "dark"} onClick={() => setTheme("dark")}></span>
            <span className={theme==='gOne'? 'gOne activeTheme' : "gOne"} onClick={() => setTheme("gOne")}></span>
            <span className={theme==='gTwo'? 'gTwo activeTheme' : "gTwo"} onClick={() => setTheme("gTwo")}></span>
            <span className={theme==='gThree'? 'gThree activeTheme' : "gThree"} onClick={() => setTheme("gThree")}></span>
        </div>
    </header>
  )
}

