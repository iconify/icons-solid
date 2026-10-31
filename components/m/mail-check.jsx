import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/z18-4ac4k.css';
import '../../css/w/w8ybz_blu.css';
import '../../css/h/hiib8cblo.css';
import '../../css/c/czl5a3bdp.css';
import '../../css/p/p8-rjab4y.css';
import '../../css/d/df6-gcc7v.css';
import '../../css/h/hnr05jbfk.css';
import '../../css/c/c6nzmddiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGqJ6occkx" x1="9" x2="15" y1="3.5" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="wm-s z18-4ac4k"/><path fill="url(#SVGqJ6occkx)" class="w8ybz_blu"/><path class="hiib8cblo wm-s"/><path class="czl5a3bdp wm-shine"/><path class="p8-rjab4y wm-shine"/><path class="df6-gcc7v wm-shine"/><path class="hnr05jbfk wm-shine"/><path class="c6nzmddiu wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:mail-check"} {...others} />);
}

export default Component;
