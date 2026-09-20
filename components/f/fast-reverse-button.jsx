import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/an3wb-bzz.css';
import '../../css/c/ckusvhbps.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ij2x_72vy"><path class="an3wb-bzz"/><path class="ckusvhbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fast-reverse-button"} {...others} />);
}

export default Component;
