import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qhyosbcse.css';
import '../../css/v/v3nt4gb_c.css';
import '../../css/h/h3rixiekm.css';
import '../../css/h/h32uy_wuf.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGY3b75bPb)" clip-rule="evenodd" class="qhyosbcse"/><path fill="url(#SVGPiLhzb8n)" clip-rule="evenodd" class="v3nt4gb_c"/><defs><radialGradient id="SVGPiLhzb8n" cx="0" cy="0" r="1" gradientTransform="matrix(0 -9 14.4 0 10.5 9.5)" gradientUnits="userSpaceOnUse"><stop class="h3rixiekm"/><stop offset="1" class="h32uy_wuf"/></radialGradient><linearGradient id="SVGY3b75bPb" x1="6.854" x2="10.777" y1="9.196" y2="17.55" gradientUnits="userSpaceOnUse"><stop offset=".125" class="h32uy_wuf"/><stop offset="1" class="h3rixiekm"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:animal-paw-print-20"} {...others} />);
}

export default Component;
