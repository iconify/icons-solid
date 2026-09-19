import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q5vc8fv2s.css';
import '../../css/x/xom4f6j5k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="q5vc8fv2s"/><path class="xom4f6j5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:snowboarder"} {...others} />);
}

export default Component;
