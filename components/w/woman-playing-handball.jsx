import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cswur-bdq.css';
import '../../css/f/fl1xj-svy.css';
import '../../css/z/zh-ha4bgk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="cswur-bdq"/><path class="fl1xj-svy"/><path class="zh-ha4bgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-playing-handball"} {...others} />);
}

export default Component;
