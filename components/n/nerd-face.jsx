import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7zv8u7nz.css';
import '../../css/h/hc6ikkmba.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="g7zv8u7nz"/><path class="hc6ikkmba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:nerd-face"} {...others} />);
}

export default Component;
