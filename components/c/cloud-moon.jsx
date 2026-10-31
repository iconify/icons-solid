import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/cygpxr04g.css';
import '../../css/x/xfbznrbzy.css';
import '../../css/p/pr6efjbes.css';
import '../../css/n/nfwyakbys.css';
import '../../css/q/qvzlo2b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYGNqKN4i" x1="9.1" x2="15.1" y1="2.26" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGYGNqKN4i)" class="cygpxr04g"/><path class="wm-a xfbznrbzy"/><path class="pr6efjbes wm-shine"/><path class="nfwyakbys wm-shine"/><path class="qvzlo2b6s wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:cloud-moon"} {...others} />);
}

export default Component;
