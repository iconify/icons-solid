import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8m1dxbdz.css';
import '../../css/r/r88klstox.css';
import '../../css/t/t0r3wbkks.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="u8m1dxbdz"/><path class="r88klstox"/><path class="t0r3wbkks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-blonde-hair"} {...others} />);
}

export default Component;
