import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4_epvvsn.css';
import '../../css/c/cko0s7bfe.css';
import '../../css/u/uxt6nsu8c.css';
import '../../css/l/l5cbemxif.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGVpy1LcKL)" class="a4_epvvsn"/><path fill="url(#SVGSRmDlbnE)" class="cko0s7bfe"/><path fill="url(#SVG1c1Xzc8Y)" class="uxt6nsu8c"/><defs><linearGradient id="SVGVpy1LcKL" x1="16.474" x2="26.659" y1="-1.3" y2="4.133" gradientUnits="userSpaceOnUse"><stop class="l5cbemxif"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVGSRmDlbnE" x1="8.386" x2="17.444" y1="3.312" y2="9.351" gradientUnits="userSpaceOnUse"><stop class="l5cbemxif"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVG1c1Xzc8Y" x1="2.75" x2="9.859" y1="4.5" y2="11.017" gradientUnits="userSpaceOnUse"><stop class="l5cbemxif"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:data-bar-vertical-ascending-20"} {...others} />);
}

export default Component;
