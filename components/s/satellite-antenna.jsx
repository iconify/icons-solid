import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sd6h-xbnc.css';
import '../../css/q/qnd1qf16x.css';
import '../../css/m/mud93ub7w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="sd6h-xbnc"/><path class="qnd1qf16x"/><path class="mud93ub7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:satellite-antenna"} {...others} />);
}

export default Component;
