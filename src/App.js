import { Box, Typography, Stack, } from "@mui/material";
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box sx={{ backgroundColor: "#8c8cff", width: "50%", height: "50%", borderRadius: '50px' }}>
        <Typography variant="h3" sx={{ color: "white" }}>Glaucoma detection Portal</Typography>
        <Typography variant="body1" sx={{ color: "white" }}>Enter image to be tested</Typography>
        {/* <Typography variant="body1" sx={{ color: "white", marginTop: "10%" }}>Results will be Displayed here</Typography> */}
        {/* <Typography variant="body1" sx={{ color: "Red", marginTop: "10%" }}>Glaucoma is Present</Typography> */}
        <Typography variant="body1" sx={{ color: "green", marginTop: "10%" }}>Glaucoma is Absent</Typography>
        <Stack direction="row" spacing={2} sx={{ marginTop: "10%", marginLeft: "40%" }}>
          <Button variant="contained"
            sx={{ textTransform: "none", backgroundColor: "blue", color: "white", ":hover": { backgroundColor: "blue" } }}
          >Browse</Button>
          <Button variant="contained"
            sx={{ textTransform: "none", backgroundColor: "green", color: "white", ":hover": { backgroundColor: "green" } }}
          >Test</Button>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
