import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j1_g_if2b.css';
import '../../css/u/uki4bcbhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j1_g_if2b"/><path class="uki4bcbhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:archive-tick"} {...others} />);
}

export default Component;
