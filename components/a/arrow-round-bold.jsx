import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zc-5x3b5n.css';
import '../../css/g/gdcjfnbpy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="zc-5x3b5n"/><path class="gdcjfnbpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-round-bold"} {...others} />);
}

export default Component;
