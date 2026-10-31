import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jxzjfpggr.css';
import '../../css/p/pcfq5ygad.css';
import '../../css/d/dfhc5fbya.css';
import '../../css/f/f9hsu-63x.css';
import '../../css/d/d_2obcbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jxzjfpggr wm-shadow"/><path class="pcfq5ygad"/><path class="dfhc5fbya"/><path class="f9hsu-63x"/><path class="d_2obcbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cpu"} {...others} />);
}

export default Component;
