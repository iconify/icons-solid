import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/wib3bn-kj.css';
import '../../css/p/pbro_bsdx.css';
import '../../css/j/jrq_zsyed.css';
import '../../css/w/wlqafuduh.css';
import '../../css/a/aa14j2yan.css';
import '../../css/f/fpzl24gqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZXOlIbiM" x1="8.93" x2="14.93" y1="2.76" y2="22.01" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="wib3bn-kj wm-s"/><path fill="url(#SVGZXOlIbiM)" class="pbro_bsdx"/><path class="jrq_zsyed wm-s"/><path class="wlqafuduh wm-shine"/><path class="aa14j2yan wm-shine"/><path class="fpzl24gqa wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:user-cog"} {...others} />);
}

export default Component;
