import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/h/hhc5iou_j.css';
import '../../css/w/ws_62zb9c.css';
import '../../css/x/xbsv8cmbl.css';
import '../../css/u/u3fmu7w8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="hhc5iou_j"/><path class="ws_62zb9c"/><path class="xbsv8cmbl"/><path class="u3fmu7w8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-line-linear"} {...others} />);
}

export default Component;
