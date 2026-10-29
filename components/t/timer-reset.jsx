import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/ntu-3wbry.css';
import '../../css/v/vg3gqibcj.css';
import '../../css/h/hr7v-vbfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ntu-3wbry"/><path class="vg3gqibcj"/><path class="hr7v-vbfi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:timer-reset"} {...others} />);
}

export default Component;
