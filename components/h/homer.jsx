import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmmz0zbaw.css';
import '../../css/j/jlhfl4b_x.css';
import '../../css/e/e5tc9_bhb.css';
import '../../css/t/txfrc-r3v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dmmz0zbaw"/><linearGradient id="SVGfpniidcT" x1="-48.695" x2="-47.577" y1="653.166" y2="653.166" gradientTransform="matrix(0 457.069 457.069 0 -298285.906 22257.38)" gradientUnits="userSpaceOnUse"><stop offset="0" class="jlhfl4b_x"/><stop offset="1" class="e5tc9_bhb"/></linearGradient><path fill="url(#SVGfpniidcT)" class="txfrc-r3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homer"} {...others} />);
}

export default Component;
