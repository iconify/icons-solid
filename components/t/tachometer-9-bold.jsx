import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cvifrybra.css';
import '../../css/l/lrpgtibop.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="cvifrybra"/><path clip-rule="evenodd" class="lrpgtibop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-9-bold"} {...others} />);
}

export default Component;
