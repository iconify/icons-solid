import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gzqn-ebyu.css';
import '../../css/y/yo0_1hbxu.css';
import '../../css/l/l6xlefbma.css';
import '../../css/m/m_-a2gaii.css';
import '../../css/r/r73cvsbkx.css';
import '../../css/u/upy_jlbkb.css';
import '../../css/i/ihitv2hiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJVk3Ybng" x1="9" x2="15" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGJVk3Ybng)" class="gzqn-ebyu"/><path class="wm-a yo0_1hbxu"/><path class="l6xlefbma wm-shine"/><path class="m_-a2gaii wm-shine"/><path class="r73cvsbkx wm-shine"/><path class="upy_jlbkb wm-shine"/><path class="ihitv2hiq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:save-all"} {...others} />);
}

export default Component;
