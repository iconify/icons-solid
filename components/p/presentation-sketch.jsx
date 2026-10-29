import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yeouzeolq.css';
import '../../css/m/mx6glt-_b.css';
import '../../css/h/hyx065bvb.css';
import '../../css/d/duf5upbxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="yeouzeolq"/><path class="mx6glt-_b wm-a"/><path class="hyx065bvb wm-k"/><path class="duf5upbxl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:presentation-sketch"} {...others} />);
}

export default Component;
