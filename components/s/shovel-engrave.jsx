import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q5y09vy-a.css';
import '../../css/s/s6px0bc7e.css';
import '../../css/i/i6m159bpq.css';
import '../../css/f/fjzpsmbxy.css';
import '../../css/x/xkg1wybgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q5y09vy-a wm-k"/><path class="s6px0bc7e wm-a"/><path class="i6m159bpq wm-shadow"/><path class="fjzpsmbxy wm-k"/><path class="wm-a xkg1wybgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shovel-engrave"} {...others} />);
}

export default Component;
