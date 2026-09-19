import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tq1gk_b-s.css';
import '../../css/j/jr7h29bob.css';
import '../../css/f/fcibvyp4k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="tq1gk_b-s"/><path class="jr7h29bob"/><path class="fcibvyp4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-standing"} {...others} />);
}

export default Component;
