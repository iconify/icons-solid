import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h-6c3ub_h.css';
import '../../css/i/ievmwpbxo.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/m/mebxeyt4k.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/c/c3wgojkty.css';
import '../../css/o/oao2m3bzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="h-6c3ub_h wm-deco"/><path class="ievmwpbxo wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="mebxeyt4k wm-k"/><path class="wm-a wqb-0n4qk"/><path class="c3wgojkty wm-s"/><path class="oao2m3bzy wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-plus-blueprint"} {...others} />);
}

export default Component;
