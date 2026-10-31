import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/doj9fhgbh.css';
import '../../css/r/rcorzpbks.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/j/j0cuxet1l.css';
import '../../css/i/i1g1qkwrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="doj9fhgbh"/><path class="rcorzpbks wm-shine"/><path class="jmvv3kbnk wm-k"/><path class="j0cuxet1l wm-a"/><path class="i1g1qkwrt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:calendar-span"} {...others} />);
}

export default Component;
