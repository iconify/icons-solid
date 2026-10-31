import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jqpgwmixp.css';
import '../../css/z/zp8vosbvo.css';
import '../../css/k/ktpbhacqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jqpgwmixp"/><path class="zp8vosbvo"/><path class="ktpbhacqo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:remove-formatting"} {...others} />);
}

export default Component;
