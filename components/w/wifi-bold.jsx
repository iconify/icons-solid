import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lowszmb9r.css';
import '../../css/u/u8hw2r2tr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><circle class="lowszmb9r"/><path class="u8hw2r2tr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wifi-bold"} {...others} />);
}

export default Component;
