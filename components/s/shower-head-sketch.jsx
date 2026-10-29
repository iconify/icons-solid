import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zthar8b2j.css';
import '../../css/j/j4eqi7bkq.css';
import '../../css/q/qzi94_bmn.css';
import '../../css/k/km_e3-bdz.css';
import '../../css/k/kmn51feoi.css';
import '../../css/y/yzluadc5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zthar8b2j"/><path class="j4eqi7bkq wm-k"/><path class="qzi94_bmn wm-a"/><path class="km_e3-bdz wm-k"/><path class="kmn51feoi wm-a"/><path class="wm-s yzluadc5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shower-head-sketch"} {...others} />);
}

export default Component;
