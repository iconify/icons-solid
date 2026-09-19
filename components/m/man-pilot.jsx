import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f9-zp1oyu.css';
import '../../css/k/k-yulk6mx.css';
import '../../css/h/h09dbrtwn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="f9-zp1oyu"/><path class="k-yulk6mx"/><path class="h09dbrtwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-pilot"} {...others} />);
}

export default Component;
