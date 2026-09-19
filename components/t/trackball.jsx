import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lm9uvnbxx.css';
import '../../css/f/fdkc3ubmi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="lm9uvnbxx"/><path class="fdkc3ubmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:trackball"} {...others} />);
}

export default Component;
