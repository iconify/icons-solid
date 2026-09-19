import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/je95qppjr.css';
import '../../css/m/m0d72jbgs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="je95qppjr"/><path class="m0d72jbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:sun-with-face"} {...others} />);
}

export default Component;
