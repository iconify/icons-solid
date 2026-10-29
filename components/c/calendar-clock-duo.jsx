import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zx1akcbmk.css';
import '../../css/f/fvp0h1bsk.css';
import '../../css/h/hl1gxsb1a.css';
import '../../css/f/f-l8bxkjq.css';
import '../../css/i/i9cg2rj9b.css';
import '../../css/y/ykqnlnbbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zx1akcbmk"/><path class="fvp0h1bsk wm-s"/><path class="hl1gxsb1a wm-s"/><path class="f-l8bxkjq wm-s"/><path class="i9cg2rj9b"/><path class="wm-a ykqnlnbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-clock-duo"} {...others} />);
}

export default Component;
