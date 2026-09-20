import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3x7dfbgq.css';
import '../../css/a/ae849gbxa.css';
import '../../css/c/cwyvfcb4p.css';
import '../../css/f/f6kfxdbnp.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGfmyJM77M" class="z3x7dfbgq"/></defs><g class="ae849gbxa"><path class="cwyvfcb4p"/><path class="f6kfxdbnp"/></g><g class="ij2x_72vy"><use href="#SVGfmyJM77M"/><use href="#SVGfmyJM77M"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:military-medal"} {...others} />);
}

export default Component;
