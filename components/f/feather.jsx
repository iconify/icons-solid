import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/a/aq8hkab1x.css';
import '../../css/u/u5vi69bwx.css';
import '../../css/a/a2n3uesug.css';
import '../../css/q/q_ojy16ie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRMroTdcS" x1="8.81" x2="14.81" y1="3.22" y2="21.17" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRMroTdcS)" class="aq8hkab1x"/><path class="u5vi69bwx wm-shine"/><path class="a2n3uesug wm-shine"/><path class="q_ojy16ie wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:feather"} {...others} />);
}

export default Component;
