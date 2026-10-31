import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/f351tbbqq.css';
import '../../css/q/qq9qlnbdd.css';
import '../../css/s/s046c9oqi.css';
import '../../css/d/dj9uu322i.css';
import '../../css/q/qyo0pj7iw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfnpOdbap" x1="8.87" x2="14.87" y1="4.73" y2="19.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGfnpOdbap)" class="f351tbbqq"/><path class="qq9qlnbdd wm-s"/><path class="s046c9oqi wm-shine"/><path class="dj9uu322i wm-shine"/><path class="qyo0pj7iw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:volume-off"} {...others} />);
}

export default Component;
