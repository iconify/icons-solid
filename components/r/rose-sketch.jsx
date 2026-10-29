import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/awf5bhbxs.css';
import '../../css/k/kfz5yrb5e.css';
import '../../css/z/z3te8sbzk.css';
import '../../css/u/uikytvy5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="awf5bhbxs wm-deco"/><path class="kfz5yrb5e wm-k"/><path class="wm-k z3te8sbzk"/><path class="uikytvy5m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rose-sketch"} {...others} />);
}

export default Component;
