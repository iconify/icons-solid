import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nasn4zbie.css';
import '../../css/u/uq44tf-no.css';
import '../../css/r/rdcxjybbt.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGyPFLEbar" class="nasn4zbie"/><path id="SVGFuge6cpE" class="uq44tf-no"/></defs><g class="rdcxjybbt"><use href="#SVGyPFLEbar"/><use href="#SVGFuge6cpE"/></g><g class="ij2x_72vy"><use href="#SVGyPFLEbar"/><use href="#SVGFuge6cpE"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:star-and-crescent"} {...others} />);
}

export default Component;
