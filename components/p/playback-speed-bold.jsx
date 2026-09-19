import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3hmpab7s.css';
import '../../css/h/hq-wbibec.css';
import '../../css/o/o_k6lcc5g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r3hmpab7s"/><path clip-rule="evenodd" class="hq-wbibec"/><path class="o_k6lcc5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:playback-speed-bold"} {...others} />);
}

export default Component;
