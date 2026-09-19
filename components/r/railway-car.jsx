import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wk284x_pt.css';
import '../../css/n/n83rf6bty.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="wk284x_pt"/><path class="n83rf6bty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:railway-car"} {...others} />);
}

export default Component;
