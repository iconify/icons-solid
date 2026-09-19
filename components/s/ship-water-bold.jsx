import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1c000c5t.css';
import '../../css/c/cecui5bdg.css';
import '../../css/q/qxy675oxf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b1c000c5t"/><path class="cecui5bdg"/><path class="qxy675oxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ship-water-bold"} {...others} />);
}

export default Component;
