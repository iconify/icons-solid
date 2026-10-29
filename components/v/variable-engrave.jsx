import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n7lyvxr_x.css';
import '../../css/d/daxkvlbui.css';
import '../../css/l/lott_xlgw.css';
import '../../css/w/w1hie5dyf.css';
import '../../css/z/zak1u-b3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n7lyvxr_x wm-k"/><path class="daxkvlbui wm-a"/><path class="lott_xlgw wm-shadow"/><path class="w1hie5dyf wm-k"/><path class="wm-a zak1u-b3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:variable-engrave"} {...others} />);
}

export default Component;
