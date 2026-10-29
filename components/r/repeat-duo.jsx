import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q1pio2buw.css';
import '../../css/g/gdtfzh2qz.css';
import '../../css/v/vvbqvot1n.css';
import '../../css/g/gp29cxbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q1pio2buw"/><path class="gdtfzh2qz wm-a"/><path class="vvbqvot1n"/><path class="gp29cxbhj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:repeat-duo"} {...others} />);
}

export default Component;
