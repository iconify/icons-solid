import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p5s_0zkai.css';
import '../../css/x/xxc5ztfqi.css';
import '../../css/m/m-qm78bhk.css';
import '../../css/s/sljtjcbnu.css';
import '../../css/b/buul2mbps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p5s_0zkai"/><path class="wm-k xxc5ztfqi"/><path class="m-qm78bhk wm-k"/><path class="sljtjcbnu wm-a"/><path class="buul2mbps wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-open-sketch"} {...others} />);
}

export default Component;
