import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gj0h14zsf.css';
import '../../css/x/xx0ztmbfe.css';
import '../../css/w/weiag9x-d.css';
import '../../css/m/mddplgk8t.css';
import '../../css/j/jve7f56pq.css';
import '../../css/h/hsrf6rb8u.css';
import '../../css/p/p-r6xpktj.css';
import '../../css/z/zvbf2z9oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFq6WVcrz" x1="10.69" x2="16.69" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="gj0h14zsf wm-s"/><path fill="url(#SVGFq6WVcrz)" class="xx0ztmbfe"/><path class="weiag9x-d wm-s"/><path class="mddplgk8t wm-shine"/><path class="jve7f56pq wm-shine"/><path class="hsrf6rb8u wm-shine"/><path class="p-r6xpktj wm-shine"/><path class="wm-shine zvbf2z9oa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:file-pen"} {...others} />);
}

export default Component;
