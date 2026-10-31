import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/n7d-lwbfu.css';
import '../../css/x/xki_zdbak.css';
import '../../css/i/ip4px2bly.css';
import '../../css/i/i3tbhgbbx.css';
import '../../css/e/e-6c_ycxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwEU9bdmi" x1="9" x2="15" y1="3.52" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGwEU9bdmi)" class="n7d-lwbfu"/><path class="wm-a xki_zdbak"/><path class="ip4px2bly wm-shine"/><path class="i3tbhgbbx wm-shine"/><path class="e-6c_ycxf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:video-call"} {...others} />);
}

export default Component;
