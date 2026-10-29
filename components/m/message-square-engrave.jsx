import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tmqec3_yf.css';
import '../../css/q/qf5kqpo9g.css';
import '../../css/e/ee_t7pb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tmqec3_yf"/><path class="qf5kqpo9g wm-shadow"/><path class="ee_t7pb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-square-engrave"} {...others} />);
}

export default Component;
