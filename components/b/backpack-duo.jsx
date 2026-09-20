import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jc73t5bwa.css';
import '../../css/y/ypbc99fbm.css';
import '../../css/e/esc7jshnh.css';
import '../../css/y/y5n7l_ebo.css';
import '../../css/q/qn4uajbet.css';
import '../../css/l/lqqitmb9i.css';
import '../../css/e/ecr2hlbkd.css';
import '../../css/f/ffegmj1ap.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)"><path class="jc73t5bwa"/><path class="ypbc99fbm"/><path class="esc7jshnh"/><path class="y5n7l_ebo"/><path class="qn4uajbet"/><path class="lqqitmb9i"/><path class="ecr2hlbkd"/><path class="ffegmj1ap"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:backpack-duo"} {...others} />);
}

export default Component;
