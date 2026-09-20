import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hurplfqkh.css';
import '../../css/s/s2-w90v_i.css';
import '../../css/e/eie0k96ry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hurplfqkh"/><path class="s2-w90v_i"/><path class="eie0k96ry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-vehicle-robot-1"} {...others} />);
}

export default Component;
