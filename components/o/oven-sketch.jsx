import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yb16dccix.css';
import '../../css/r/raay55lkn.css';
import '../../css/d/d826o74jr.css';
import '../../css/w/wgiyf7qtm.css';
import '../../css/i/i0m_0hbys.css';
import '../../css/m/murv6mteh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yb16dccix"/><path class="raay55lkn wm-a"/><path class="d826o74jr wm-s"/><path class="wgiyf7qtm wm-k"/><path class="i0m_0hbys wm-a"/><path class="murv6mteh wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:oven-sketch"} {...others} />);
}

export default Component;
