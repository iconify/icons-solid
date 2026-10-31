import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/upqvlijvi.css';
import '../../css/e/esgjdlmqa.css';
import '../../css/i/imn_1acgr.css';
import '../../css/a/a_-zzqb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="upqvlijvi wm-shadow"/><path class="esgjdlmqa"/><path class="imn_1acgr"/><path class="a_-zzqb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:scissors"} {...others} />);
}

export default Component;
