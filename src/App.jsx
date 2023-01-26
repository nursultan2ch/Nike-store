import React from 'react'
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data'

const App = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoints={popularsales} ifExists/>
        <FlexContent endpoints={highlight} ifExists/>
        <Sales endpoints={toprateslaes}/>
        <FlexContent endpoints={sneaker}/>
        <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI}/>
    </div>
  )
}

export default App
