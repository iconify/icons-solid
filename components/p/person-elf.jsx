import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dffa-2-8j.css';
import '../../css/w/wd7_dfbtp.css';
import '../../css/k/kv9wu-bev.css';
import '../../css/y/yh8mj6bny.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="dffa-2-8j"/><path class="wd7_dfbtp"/><path class="kv9wu-bev"/><path class="yh8mj6bny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-elf"} {...others} />);
}

export default Component;
