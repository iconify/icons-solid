import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dwuxk_f7w.css';
import '../../css/r/rk-8ablxs.css';
import '../../css/j/jfgbi4k4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dwuxk_f7w wm-k"/><path class="rk-8ablxs wm-k"/><path class="jfgbi4k4h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dog-sketch"} {...others} />);
}

export default Component;
