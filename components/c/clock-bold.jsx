import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us95srb8d.css';
import '../../css/n/nlxnq8bbi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="us95srb8d"/><path clip-rule="evenodd" class="nlxnq8bbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clock-bold"} {...others} />);
}

export default Component;
