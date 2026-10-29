import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fu8_hdc5h.css';
import '../../css/v/vgsxhnmjv.css';
import '../../css/z/zzdfvdb8o.css';
import '../../css/h/hjbc2qsic.css';
import '../../css/v/v7tmcrk-x.css';
import '../../css/q/q9seatbmp.css';
import '../../css/e/er_76pq8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fu8_hdc5h"/><path class="vgsxhnmjv wm-s"/><path class="wm-a zzdfvdb8o"/><path class="hjbc2qsic"/><path class="v7tmcrk-x wm-a"/><path class="q9seatbmp"/><path class="er_76pq8o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unplug-duo"} {...others} />);
}

export default Component;
