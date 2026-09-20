import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-6u2abyf.css';
import '../../css/k/kso7adcaj.css';
import '../../css/b/bbjcuubsr.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGWNr3z2qS" class="k-6u2abyf"/></defs><g class="kso7adcaj"><circle class="bbjcuubsr"/><use href="#SVGWNr3z2qS"/></g><g class="ij2x_72vy"><circle class="bbjcuubsr"/><use href="#SVGWNr3z2qS"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-exclamation-mark"} {...others} />);
}

export default Component;
