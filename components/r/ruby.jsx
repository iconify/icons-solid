import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/woofis53b.css';
import '../../css/r/rzmiokq8o.css';
import '../../css/i/icfbnbcwi.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/m4b14ycdj.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGuh1Nacvp" class="woofis53b"/></defs><path class="rzmiokq8o"/><path class="icfbnbcwi"/><g transform="rotate(-45 46.006 31.85)" class="ij2x_72vy"><use href="#SVGuh1Nacvp"/><path class="m4b14ycdj"/><use href="#SVGuh1Nacvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ruby"} {...others} />);
}

export default Component;
