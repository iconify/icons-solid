import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pvtqafbvk.css';
import '../../css/i/i8zd7mgeq.css';
import '../../css/o/o-59qkbdx.css';
import '../../css/l/lrm0xjb4h.css';
import '../../css/w/womt7bbrf.css';
import '../../css/t/t0t9bi2an.css';
import '../../css/m/m0gpzbuzw.css';
import '../../css/r/rop8rgbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="pvtqafbvk wm-shadow"/><path class="i8zd7mgeq"/><path class="o-59qkbdx"/><path class="lrm0xjb4h"/><path class="womt7bbrf"/><path class="t0t9bi2an wm-s"/><path class="m0gpzbuzw wm-s"/><path class="rop8rgbwc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:crystal-ball"} {...others} />);
}

export default Component;
