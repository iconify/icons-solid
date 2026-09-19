import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qea20536a.css';
import '../../css/u/u1ts3dbke.css';
import '../../css/z/z2w67ghwc.css';
import '../../css/s/sk047ybau.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVG1miIGGch" x1="500.003" x2="-.097" y1="579.106" y2="1079.206" gradientTransform="translate(15.534 -96.774)scale(.1939)" gradientUnits="userSpaceOnUse"><stop offset=".003" class="qea20536a"/><stop offset=".469" class="u1ts3dbke"/><stop offset="1" class="z2w67ghwc"/></linearGradient></defs><path fill="url(#SVG1miIGGch)" class="sk047ybau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kotlin"} {...others} />);
}

export default Component;
