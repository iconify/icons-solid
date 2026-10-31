import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/sapiktb5x.css';
import '../../css/b/bevxfwnwc.css';
import '../../css/n/n8_i-z38z.css';
import '../../css/c/cqou-fjdn.css';
import '../../css/l/lnf56wbat.css';
import '../../css/q/q5axpybte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9Rd0vb7z" x1="9" x2="15" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9Rd0vb7z)" class="sapiktb5x"/><path class="bevxfwnwc wm-shine"/><path class="n8_i-z38z wm-shine"/><path class="cqou-fjdn wm-shine"/><path class="lnf56wbat wm-shine"/><path class="q5axpybte wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:circle-chevron-right"} {...others} />);
}

export default Component;
