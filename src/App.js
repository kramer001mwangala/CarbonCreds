import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  // Stories,
  // Inventory,
  // MarketplaceLanding,
  // Marketplace,
  // LargeNft,
  // Create,
  // NoblebrightNft,
  // SingleStory,
  // Mint,
  // AuthorProfile,
  // Snapshot,
} from "./dapp_assets/src/pages/home";
import { Box, useColorMode } from "@chakra-ui/react";
import { NavBar, LoadingSpinner } from "./dapp_assets/src/pages/containers";
// import { useAnvilSelector } from "@vvv-interactive/nftanvil-react";
import { Footer } from "./containers";
import { BgColorDark, BgColorLight } from "./dapp_assets/src/pages/containers/colormode/Colors";

function App() {
  const loaded = useAnvilSelector((state) => state.user.map.history);
  const { colorMode } = useColorMode();

  if (!loaded) return <LoadingSpinner />;

  return (
    <Box bg={colorMode === "light" ? BgColorLight : BgColorDark} minH="110vh">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/inventory" element={<Inventory />} />
          <Route path="/marketplace" element={<MarketplaceLanding />} />
          <Route path="/marketplace/:author" element={<Marketplace />} />
          <Route path="/nft/:tokenid" element={<LargeNft />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/create" element={<Create />} />
          <Route path="/stories/:storySortKey" element={<SingleStory />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/profile/:authorPrincipal" element={<AuthorProfile />} />
          <Route path="/noblebright" element={<NoblebrightNft />} />
          <Route path="/snapshot" element={<Snapshot />} /> */}
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
