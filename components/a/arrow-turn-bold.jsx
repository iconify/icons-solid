import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dsf27g_nh.css';
import '../../css/r/rwa0t5xvq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="dsf27g_nh"/><path class="rwa0t5xvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-turn-bold"} {...others} />);
}

export default Component;
