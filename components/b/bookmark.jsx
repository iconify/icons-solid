import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsu_4ovau.css';
import '../../css/k/kbffqqeed.css';
import '../../css/f/f4ryxuygv.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGgH6Nebnv" class="lsu_4ovau"/></defs><path class="kbffqqeed"/><path class="f4ryxuygv"/><g class="ij2x_72vy"><use href="#SVGgH6Nebnv"/><use href="#SVGgH6Nebnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bookmark"} {...others} />);
}

export default Component;
