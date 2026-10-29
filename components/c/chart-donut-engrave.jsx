import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qh8bn-u7p.css';
import '../../css/h/hz1637bhd.css';
import '../../css/o/o3os9344g.css';
import '../../css/v/v1055zads.css';
import '../../css/u/uv6uwdbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qh8bn-u7p wm-k"/><path class="hz1637bhd wm-a"/><path class="o3os9344g wm-shadow"/><path class="v1055zads wm-k"/><path class="uv6uwdbji wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-donut-engrave"} {...others} />);
}

export default Component;
