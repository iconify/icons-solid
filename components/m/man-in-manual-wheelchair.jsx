import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdh6u__cw.css';
import '../../css/t/tg50px5cr.css';
import '../../css/n/np1ebrbfk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kdh6u__cw"/><path class="tg50px5cr"/><path class="np1ebrbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-in-manual-wheelchair"} {...others} />);
}

export default Component;
