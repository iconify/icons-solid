import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/qs_5e06gz.css';
import '../../css/r/rod21bcwh.css';
import '../../css/l/lkfw4pbla.css';
import '../../css/e/ej9quvb_z.css';
import '../../css/k/ks2_28b8b.css';
import '../../css/q/q7bm4ubmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPpW2Cbkh" x1="9" x2="15" y1="4" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGPpW2Cbkh)" class="qs_5e06gz"/><path class="rod21bcwh wm-shine"/><path class="lkfw4pbla wm-shine"/><path class="ej9quvb_z wm-shine"/><path class="ks2_28b8b wm-shine"/><path class="q7bm4ubmx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:ticket"} {...others} />);
}

export default Component;
