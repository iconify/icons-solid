import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/snc-xhbno.css';
import '../../css/e/e6t8k77zu.css';
import '../../css/p/p0dv5ocbm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="snc-xhbno"/><path class="e6t8k77zu"/><path class="p0dv5ocbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:temperature-cold-bold"} {...others} />);
}

export default Component;
