import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mux17bcls.css';
import '../../css/g/g03hzccav.css';
import '../../css/d/dy0o6r5sm.css';
import '../../css/q/q7z1q3r6p.css';
import '../../css/r/rthlz8zqh.css';
import '../../css/q/qkpny4b9k.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)"><path class="mux17bcls"/><path class="g03hzccav"/><path class="dy0o6r5sm"/><path class="q7z1q3r6p"/><path class="rthlz8zqh"/><path class="qkpny4b9k"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:face-id-1-duo"} {...others} />);
}

export default Component;
