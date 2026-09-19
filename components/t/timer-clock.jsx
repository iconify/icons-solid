import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ce64vt83q.css';
import '../../css/z/zh-570uxn.css';
import '../../css/p/pelgp0x_u.css';
import '../../css/v/vjopy_4gr.css';
import '../../css/d/dngygcc6w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ce64vt83q"/><path class="zh-570uxn"/><path class="pelgp0x_u"/><path class="vjopy_4gr"/><path class="dngygcc6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:timer-clock"} {...others} />);
}

export default Component;
