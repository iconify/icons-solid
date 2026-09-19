import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0kpy_s4i.css';
import '../../css/h/h4optxb8l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="i0kpy_s4i"/><path clip-rule="evenodd" class="h4optxb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-3-bold"} {...others} />);
}

export default Component;
