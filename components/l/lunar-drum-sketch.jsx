import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hukkl55px.css';
import '../../css/w/w4o_mqs1s.css';
import '../../css/a/a4drb_btg.css';
import '../../css/q/qe7bs-blu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hukkl55px wm-a"/><path class="w4o_mqs1s wm-k"/><path class="a4drb_btg wm-a"/><path class="qe7bs-blu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lunar-drum-sketch"} {...others} />);
}

export default Component;
