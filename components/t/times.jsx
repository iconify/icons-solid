import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g2g8mcbuf.css';
import '../../css/q/q_m6zyuou.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="g2g8mcbuf"/><path class="q_m6zyuou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:times"} {...others} />);
}

export default Component;
