import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-6u2abyf.css';
import '../../css/h/hrzob008l.css';
import '../../css/b/bbjcuubsr.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGWNr3z2qS" class="k-6u2abyf"/></defs><g class="hrzob008l"><circle class="bbjcuubsr"/><use href="#SVGWNr3z2qS"/></g><g class="ij2x_72vy"><circle class="bbjcuubsr"/><use href="#SVGWNr3z2qS"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:red-exclamation-mark"} {...others} />);
}

export default Component;
