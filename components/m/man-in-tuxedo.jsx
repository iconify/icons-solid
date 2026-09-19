import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4ley4cku.css';
import '../../css/g/g811kvqhw.css';
import '../../css/i/ihsj1ieax.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="q4ley4cku"/><path class="g811kvqhw"/><path class="ihsj1ieax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-in-tuxedo"} {...others} />);
}

export default Component;
