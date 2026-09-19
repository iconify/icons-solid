import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aj_tubcvr.css';
import '../../css/i/ihyjxacvv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="aj_tubcvr"/><path class="ihyjxacvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:umbrella-with-rain-drops"} {...others} />);
}

export default Component;
