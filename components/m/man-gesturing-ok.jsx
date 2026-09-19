import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jmvi93buy.css';
import '../../css/x/xmiyk6bxs.css';
import '../../css/m/mdu67ccke.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="jmvi93buy"/><path class="xmiyk6bxs"/><path class="mdu67ccke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-gesturing-ok"} {...others} />);
}

export default Component;
