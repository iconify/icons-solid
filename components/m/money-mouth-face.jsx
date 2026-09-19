import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njd1q-rms.css';
import '../../css/o/ox-ob9bai.css';
import '../../css/q/q09x-sbzr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="njd1q-rms"/><path class="ox-ob9bai"/><path class="q09x-sbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:money-mouth-face"} {...others} />);
}

export default Component;
