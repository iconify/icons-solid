import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i92hlablv.css';
import '../../css/j/j9z0u4b4a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="i92hlablv"/><path class="j9z0u4b4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:puzzle-bold"} {...others} />);
}

export default Component;
