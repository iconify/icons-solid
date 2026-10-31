import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/p65ap_b-h.css';
import '../../css/m/mcwsq0bzl.css';
import '../../css/a/aldhrjbjc.css';
import '../../css/x/x978hjbzj.css';
import '../../css/x/xfd6eybtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhJ6JXPei" x1="8.75" x2="14.75" y1="2.36" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGhJ6JXPei)" class="p65ap_b-h"/><path class="mcwsq0bzl wm-a"/><path class="aldhrjbjc wm-shine"/><path class="wm-shine x978hjbzj"/><path class="wm-shine xfd6eybtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:beer"} {...others} />);
}

export default Component;
