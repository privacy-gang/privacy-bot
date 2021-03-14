import * as React from 'react'
import { Helmet } from "react-helmet"
import Particles from "react-tsparticles";
import { Container, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

// local import
import particleConfig from '../configs/particles'
import Header from './header'
import Footer from './footer'

const Layout = ({ children, classes, title }) => {
    return (
        <Container className={classes.root} maxWidth={false}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <script type='text/javascript'>
                    {`window.$crisp=[];window.CRISP_WEBSITE_ID="cc421c66-baa6-48dc-89c9-a7dda04473e1";
                    (function(){d = document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";
                    s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
                    `}
                </script>
            </Helmet>
            <Box zIndex={0}>
                <Particles id="tsparticles" className={classes.particles} options={particleConfig} />
            </Box>
            <Box className={classes.container}>
                <Box zIndex={1} pl={3} pr={3}>
                    <Header />
                    {children}
                </Box>
                <Footer />
            </Box>
        </Container>
    )
}

const styles = {
    root: {
        backgroundColor: '#180D1F',
        minHeight: '100vh',
        width: '100vw'
    },
    particles: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    }
}

export default withStyles(styles)(Layout)