import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/f/fg96gxcpy.css';
import '../../css/o/o3ggu3c5d.css';
import '../../css/l/lvilvpf8c.css';
import '../../css/u/u0ho0woqq.css';
import '../../css/u/uvvy6unui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="fg96gxcpy"/><path class="o3ggu3c5d"/><path class="lvilvpf8c"/><path class="u0ho0woqq"/><path class="uvvy6unui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:globe"} {...others} />);
}

export default Component;
