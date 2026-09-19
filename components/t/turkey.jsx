import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuvut0bsw.css';
import '../../css/h/hj18awmly.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="wuvut0bsw"/><path class="hj18awmly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:turkey"} {...others} />);
}

export default Component;
