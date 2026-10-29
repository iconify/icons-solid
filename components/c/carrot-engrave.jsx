import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ahi8tac9b.css';
import '../../css/x/xer700j8e.css';
import '../../css/m/m97uk4qod.css';
import '../../css/k/kqp_we97z.css';
import '../../css/d/domdhwbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ahi8tac9b wm-k"/><path class="wm-a xer700j8e"/><path class="m97uk4qod wm-shadow"/><path class="kqp_we97z wm-k"/><path class="domdhwbzo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:carrot-engrave"} {...others} />);
}

export default Component;
