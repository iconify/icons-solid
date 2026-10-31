import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/f667w6b2q.css';
import '../../css/c/czwr0-f-r.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/y/yvr-duh2e.css';
import '../../css/i/i1g1qkwrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="f667w6b2q"/><path class="czwr0-f-r wm-shine"/><path class="jmvv3kbnk wm-k"/><path class="wm-a yvr-duh2e"/><path class="i1g1qkwrt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:calendar-days"} {...others} />);
}

export default Component;
