import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwc47kb7e.css';
import '../../css/h/hqpee5bzp.css';
import '../../css/g/gx2ftuxqj.css';
import '../../css/q/q8g393bjr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="bwc47kb7e"/><path class="hqpee5bzp"/><path class="gx2ftuxqj"/><path class="q8g393bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrows-compress-duo-bold"} {...others} />);
}

export default Component;
