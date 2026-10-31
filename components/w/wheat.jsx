import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kob9tft5y.css';
import '../../css/i/i_vsoacii.css';
import '../../css/q/qh5mo1bpm.css';
import '../../css/n/nf5nu5vzp.css';
import '../../css/h/h8vgu_aim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kob9tft5y wm-shadow"/><path class="i_vsoacii"/><path class="qh5mo1bpm"/><path class="nf5nu5vzp"/><path class="h8vgu_aim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wheat"} {...others} />);
}

export default Component;
