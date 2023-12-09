"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react"
import { StyledEngineProvider } from '@mui/material/styles';
import './globals.css'
const theme = {
    palette: {
      primary: 'green',
      text: '#fff',
    },
  };
  
export const App = ({
  children,
}: {
  children: React.ReactNode
}) => {

    const [loading,setLoading] =  useState(true);

    useEffect(()=>{
        setLoading(false);
    })

  return (<>
        {loading && <div>Loading App</div>}
        {!loading && 
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </StyledEngineProvider>
        }
    </>
  )
}
