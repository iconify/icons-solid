import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x4_9b04xw.css';
import '../../css/b/buzsznbhz.css';
import '../../css/y/y2dwv2bgr.css';
import '../../css/a/arddq2bwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="x4_9b04xw"/><path class="buzsznbhz wm-a"/><path class="wm-k y2dwv2bgr"/><path class="arddq2bwc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:replace-sketch"} {...others} />);
}

export default Component;
