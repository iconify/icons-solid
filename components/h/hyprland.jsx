import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg1mii81m.css';
import '../../css/a/a2w_u1foi.css';
import '../../css/b/bt7k3gbvb.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGMmshBdVn" x1="561.93" x2="561.93" y1="593.85" y2="491.29" gradientTransform="translate(-18.683 -141.859)scale(.40906)" gradientUnits="userSpaceOnUse"><stop offset="0" class="xg1mii81m"/><stop offset="1" class="a2w_u1foi"/></linearGradient></defs><path fill="url(#SVGMmshBdVn)" class="bt7k3gbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:hyprland"} {...others} />);
}

export default Component;
