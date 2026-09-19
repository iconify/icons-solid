import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wi4k2fb1c.css';
import '../../css/m/mi3q7-bth.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="wi4k2fb1c"/><path class="mi3q7-bth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:pound-banknote"} {...others} />);
}

export default Component;
