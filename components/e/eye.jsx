import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/r_fm921_v.css';
import '../../css/n/ngn804blb.css';
import '../../css/c/czq2inbtz.css';
import '../../css/q/qqsxb9b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPpW2Cbkh" x1="9" x2="15" y1="4" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGPpW2Cbkh)" class="r_fm921_v"/><path class="ngn804blb wm-shine"/><path class="czq2inbtz wm-shine"/><path class="qqsxb9b2p wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:eye"} {...others} />);
}

export default Component;
