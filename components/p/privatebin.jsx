import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbeq_z80i.css';
import '../../css/l/lm_iwebwk.css';
import '../../css/z/zxb5rhbmi.css';

const viewBox = {"width":38,"height":38};
const content = `<defs><radialGradient id="SVGie8xTc7m" cx="261" cy="240" r="341" gradientTransform="matrix(1.3 .00095 -.00102 1.4 -89.2 -86.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fbeq_z80i"/><stop offset="1" class="lm_iwebwk"/></radialGradient></defs><path fill="url(#SVGie8xTc7m)" transform="translate(1.4 1.38)scale(.0709)" class="zxb5rhbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:privatebin"} {...others} />);
}

export default Component;
