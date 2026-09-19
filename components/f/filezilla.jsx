import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihulpbbfd.css';
import '../../css/g/gppy3kbck.css';
import '../../css/y/y78ns3bri.css';
import '../../css/n/nfwwqlk6u.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGDsxdcbBv" x1="187.947" x2="187.947" y1="123.859" y2="258.865" gradientUnits="userSpaceOnUse"><stop offset="0" class="ihulpbbfd"/><stop offset="1" class="gppy3kbck"/></linearGradient><linearGradient id="SVGlFh0xdnd" x1="187.947" x2="187.947" y1="123.859" y2="258.865" gradientTransform="matrix(.73244 0 0 .73242 -73.663 -75.173)" gradientUnits="userSpaceOnUse" href="#SVGDsxdcbBv"/></defs><path fill="url(#SVGlFh0xdnd)" class="y78ns3bri"/><path class="nfwwqlk6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:filezilla"} {...others} />);
}

export default Component;
