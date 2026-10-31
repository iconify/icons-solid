import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w5o1y7q0f.css';
import '../../css/o/ofhmsu0_e.css';
import '../../css/l/l11km2bja.css';
import '../../css/i/i3wlnevav.css';
import '../../css/y/yji_q_09v.css';
import '../../css/z/zufwj8b9k.css';
import '../../css/t/tkhjjdbxx.css';
import '../../css/f/f9o52vb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w5o1y7q0f wm-shadow"/><path class="ofhmsu0_e wm-s"/><path class="l11km2bja wm-shadow"/><path class="i3wlnevav"/><path class="yji_q_09v"/><path class="wm-s zufwj8b9k"/><path class="tkhjjdbxx wm-s"/><path class="f9o52vb6x wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:piggy-bank"} {...others} />);
}

export default Component;
