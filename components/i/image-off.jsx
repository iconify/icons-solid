import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/y/ybzb7abpe.css';
import '../../css/u/uh6di0wke.css';
import '../../css/l/lcth4cbjr.css';
import '../../css/q/q_mt8hwqj.css';
import '../../css/n/nms839bjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7oIkc70U" x1="9" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7oIkc70U)" class="ybzb7abpe"/><path class="uh6di0wke wm-s"/><path class="lcth4cbjr wm-shine"/><path class="q_mt8hwqj wm-shine"/><path class="nms839bjz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:image-off"} {...others} />);
}

export default Component;
