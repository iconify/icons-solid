import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pyyzj3b2u.css';
import '../../css/j/jz3_6ebnd.css';
import '../../css/z/zamig39se.css';
import '../../css/w/wbd_6ibmo.css';
import '../../css/l/lttqupbsb.css';
import '../../css/h/hnr05jbfk.css';
import '../../css/c/c6nzmddiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG6hOdFdhw" x1="9" x2="15" y1="3.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG6hOdFdhw)" class="pyyzj3b2u"/><path class="jz3_6ebnd wm-s"/><path class="wm-shine zamig39se"/><path class="wbd_6ibmo wm-shine"/><path class="lttqupbsb wm-shine"/><path class="hnr05jbfk wm-shine"/><path class="c6nzmddiu wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:mail-plus"} {...others} />);
}

export default Component;
