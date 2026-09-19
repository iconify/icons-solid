import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y4l6q0btk.css';
import '../../css/y/yhao_dhvr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="y4l6q0btk"/><path class="yhao_dhvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:sauropod"} {...others} />);
}

export default Component;
