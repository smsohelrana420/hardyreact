import React from 'react';

const Header = () => {
    return (
        <div>
            <header>
               <div className="container">
               <nav>
                <img className='developer' src="/src/assets/images/developer (2).png" alt="" />
                     
                     <h2>Ma<span>r</span>y</h2>
                    <ul>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                        <button>Hire Me</button>
                    </ul>
                </nav>
                <div className='header-text'>
                      <div className='header-left'>
                      <h2>Hi, I  am</h2>
                      <h1>Mary Hardy</h1>
                      <p>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
                      <button className='down-btn'>Download CV</button>
                      <button className='contact-btn'>Contact</button>
                      </div>
                      <div className='header-right'>
                            <img className='shape' src="/src/assets/shape.png" alt="" />
                            <img className='man' src="/src/assets/man.png" alt="" />
                      </div>

                </div>
               </div>
            </header>
        </div>
    );
};

export default Header;