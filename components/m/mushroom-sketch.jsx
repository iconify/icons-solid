import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l5w8pibgw.css';
import '../../css/k/kn3v5rl7b.css';
import '../../css/h/hn6qrhojp.css';
import '../../css/d/di1d0ffeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l5w8pibgw"/><path class="kn3v5rl7b wm-k"/><path class="hn6qrhojp wm-k"/><path class="di1d0ffeq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mushroom-sketch"} {...others} />);
}

export default Component;
