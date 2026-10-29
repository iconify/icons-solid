import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x8enjjbsq.css';
import '../../css/x/xvcz328vn.css';
import '../../css/p/p3hd9ubtl.css';
import '../../css/o/ov_robb3s.css';
import '../../css/y/y875pzbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k x8enjjbsq"/><path class="wm-a xvcz328vn"/><path class="p3hd9ubtl wm-shadow"/><path class="ov_robb3s wm-k"/><path class="wm-a y875pzbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:link-2-engrave"} {...others} />);
}

export default Component;
