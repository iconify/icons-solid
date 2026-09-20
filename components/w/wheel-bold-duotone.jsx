import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/gz4d3ib8q.css';
import '../../css/w/wz7okyt-c.css';
import '../../css/y/yl4h-1i0x.css';
import '../../css/m/miuw74b2z.css';
import '../../css/p/p01u-6bss.css';
import '../../css/u/unnurpjyv.css';
import '../../css/t/t8_ap8b8g.css';
import '../../css/q/qaa-u7v-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="gz4d3ib8q"/><path clip-rule="evenodd" class="wz7okyt-c"/></g><path class="yl4h-1i0x"/><path class="miuw74b2z"/><path class="p01u-6bss"/><path class="unnurpjyv"/><path class="t8_ap8b8g"/><path class="qaa-u7v-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wheel-bold-duotone"} {...others} />);
}

export default Component;
