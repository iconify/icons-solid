import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/swov-gv2m.css';
import '../../css/v/vko6-gbeh.css';
import '../../css/y/yu32k1baw.css';
import '../../css/q/qmdcjcb3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJXjLAegS" x1="9" x2="15" y1="3.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGJXjLAegS)" class="swov-gv2m"/><path class="vko6-gbeh wm-shine"/><path class="wm-shine yu32k1baw"/><path class="qmdcjcb3u wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:avatar-cat"} {...others} />);
}

export default Component;
