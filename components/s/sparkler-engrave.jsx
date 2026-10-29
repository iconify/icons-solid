import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jkvi8wxrs.css';
import '../../css/j/j53bn-bpm.css';
import '../../css/v/vk-qfpb7t.css';
import '../../css/x/xuz3zfllk.css';
import '../../css/h/hsgg6j0lp.css';
import '../../css/m/m3mfq9x2i.css';
import '../../css/j/jgwm0beal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jkvi8wxrs wm-k"/><path class="j53bn-bpm wm-a"/><path class="vk-qfpb7t wm-s"/><path class="wm-shadow xuz3zfllk"/><path class="hsgg6j0lp wm-k"/><path class="m3mfq9x2i wm-a"/><path class="jgwm0beal wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sparkler-engrave"} {...others} />);
}

export default Component;
