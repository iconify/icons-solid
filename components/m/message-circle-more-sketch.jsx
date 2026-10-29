import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fg3cv2kdo.css';
import '../../css/k/k22g0i2az.css';
import '../../css/j/jo6urw9ef.css';
import '../../css/d/dv5lb9b_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fg3cv2kdo"/><path class="k22g0i2az wm-k"/><path class="jo6urw9ef wm-k"/><path class="dv5lb9b_r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-circle-more-sketch"} {...others} />);
}

export default Component;
