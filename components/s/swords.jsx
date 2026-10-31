import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/m/m215yaciq.css';
import '../../css/r/ry2_1b0al.css';
import '../../css/q/q3kkxydaz.css';
import '../../css/p/psi_rbcoe.css';
import '../../css/t/to996-bnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGa7kqtdfP" x1="9" x2="15" y1="2.25" y2="22.26" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGa7kqtdfP)" class="m215yaciq"/><path class="ry2_1b0al wm-a"/><path class="q3kkxydaz wm-shine"/><path class="psi_rbcoe wm-shine"/><path class="to996-bnw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:swords"} {...others} />);
}

export default Component;
