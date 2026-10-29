import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ocujuybcd.css';
import '../../css/y/yfukz_bfm.css';
import '../../css/q/qt7btobjz.css';
import '../../css/m/m3r3og_wj.css';
import '../../css/g/g_59g7p8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ocujuybcd"/><path class="wm-k yfukz_bfm"/><path class="qt7btobjz wm-a"/><path class="m3r3og_wj wm-k"/><path class="g_59g7p8z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:school-sketch"} {...others} />);
}

export default Component;
