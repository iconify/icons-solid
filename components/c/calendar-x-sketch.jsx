import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nexzb87ke.css';
import '../../css/k/kfmyfx_2h.css';
import '../../css/j/jtyrkbc4a.css';
import '../../css/y/ymnh2gbiy.css';
import '../../css/p/px8c1ob3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nexzb87ke"/><path class="kfmyfx_2h wm-k"/><path class="jtyrkbc4a wm-a"/><path class="wm-k ymnh2gbiy"/><path class="px8c1ob3x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-x-sketch"} {...others} />);
}

export default Component;
