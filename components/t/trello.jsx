import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_gp7lgqe.css';
import '../../css/s/sav6x4bmf.css';
import '../../css/r/rv2a3dbev.css';
import '../../css/z/zn5a8lbbn.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGIbGPWdSe" x1="128" x2="128" y1="0" y2="256" gradientTransform="scale(.5)" gradientUnits="userSpaceOnUse"><stop offset="0" class="g_gp7lgqe"/><stop offset="1" class="sav6x4bmf"/></linearGradient></defs><path fill="url(#SVGIbGPWdSe)" class="rv2a3dbev"/><path class="zn5a8lbbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:trello"} {...others} />);
}

export default Component;
