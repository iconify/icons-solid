import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5ku_nt-d.css';
import '../../css/q/q4k0wbbrb.css';
import '../../css/y/yi5t2jbyt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="j5ku_nt-d"><path class="q4k0wbbrb"/><path class="yi5t2jbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:star-of-david-bold"} {...others} />);
}

export default Component;
