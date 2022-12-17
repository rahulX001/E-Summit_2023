import Head from "next/head";
import Footer from "../components/Footer";
import Professiondesign from "../components/Professiondesign";
import Navbar from "../components/Navbar";
import HeaderMain from "../components/header/header";
import Helpdesk from "../components/helpdesk/helpdesk";
import Testimonial from "../components/helpdesk/testimonial";
import Awesomefeature from "../components/Awesomefeature";
import Layout from "../components/layout";
import Workinfo from "../components/workinfo";
import Crustinfo from "../components/Crustinfo.jsx";
import Discover from "../components/discover";
import { StrictMode } from "react";
import { NextUIProvider, createTheme } from "@nextui-org/react";


export default function Home() {
  return (
    <StrictMode styles={{ maxWidth: "1600px" }}>
      <NextUIProvider theme={theme}>
        <div style={{ background: "black" }}>
          <Head>
            <title>E-Summit</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
              integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
              crossOrigin="anonymous"
            />
          </Head>
          <Navbar />
          <HeaderMain />
          <Crustinfo />
          <Discover />
          <Layout />
          <Workinfo />
          <Professiondesign />
          <Awesomefeature />
          <Helpdesk />
          <Testimonial />
          {/* <Helpdesk /> */}
          <Footer />
        </div>
      </NextUIProvider>
    </StrictMode>
  );
}

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
