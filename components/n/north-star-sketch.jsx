import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dg5g5cnba.css';
import '../../css/p/p_yvxebuk.css';
import '../../css/b/bhq6bo-ou.css';
import '../../css/x/xm7lx-c5p.css';
import '../../css/q/qj_ikebkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dg5g5cnba wm-k"/><path class="p_yvxebuk wm-k"/><path class="bhq6bo-ou wm-k"/><path class="wm-k xm7lx-c5p"/><path class="qj_ikebkq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:north-star-sketch"} {...others} />);
}

export default Component;
