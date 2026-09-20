import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obmqjxbjc.css';
import '../../css/t/tg_j_ib9l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="obmqjxbjc"/><path class="tg_j_ib9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chat-bubble-oval"} {...others} />);
}

export default Component;
