import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j1ikvobjf.css';
import '../../css/c/cgnq5970k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="j1ikvobjf"/><path class="cgnq5970k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-center-bold"} {...others} />);
}

export default Component;
