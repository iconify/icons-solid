import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3ftvb8x.css';
import '../../css/v/vuff2c6ir.css';
import '../../css/g/g8pbsyb3m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p_3ftvb8x"/><path class="vuff2c6ir"/><path class="g8pbsyb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chat-bubble-square-warning"} {...others} />);
}

export default Component;
