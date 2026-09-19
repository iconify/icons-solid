import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mj6aybcne.css';
import '../../css/f/fkw3fxcnc.css';
import '../../css/f/ftri9ubwq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="mj6aybcne"/><path class="fkw3fxcnc"/><path class="ftri9ubwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-in-manual-wheelchair-facing-right"} {...others} />);
}

export default Component;
