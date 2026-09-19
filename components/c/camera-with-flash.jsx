import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nf5ggjbhz.css';
import '../../css/r/rngcxkb7w.css';
import '../../css/o/oirt199-w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="nf5ggjbhz"/><path class="rngcxkb7w"/><path class="oirt199-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:camera-with-flash"} {...others} />);
}

export default Component;
