import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h01k3-bgz.css';
import '../../css/o/oufj9gbog.css';
import '../../css/f/fomnr7bve.css';
import '../../css/b/brjtbf9ca.css';
import '../../css/s/sfldmmytf.css';
import '../../css/s/s66utcb6u.css';
import '../../css/k/knmmwacwb.css';
import '../../css/n/nmzyo7bvt.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)"><path class="h01k3-bgz"/><path class="oufj9gbog"/><path class="fomnr7bve"/><path class="brjtbf9ca"/><path class="sfldmmytf"/><path class="s66utcb6u"/><path class="knmmwacwb"/><path class="nmzyo7bvt"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:qr-code-duo"} {...others} />);
}

export default Component;
