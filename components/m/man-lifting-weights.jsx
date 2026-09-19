import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivipgsbps.css';
import '../../css/i/i01gd7s9p.css';
import '../../css/k/k15ug01ci.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ivipgsbps"/><path class="i01gd7s9p"/><path class="k15ug01ci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-lifting-weights"} {...others} />);
}

export default Component;
