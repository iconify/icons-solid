import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/svg2-p6qx.css';
import '../../css/h/h_v74t7sa.css';
import '../../css/a/a5g-qvblb.css';
import '../../css/w/wimcfe0if.css';
import '../../css/p/pfxq0i3il.css';
import '../../css/r/rcgtie_rz.css';
import '../../css/s/sx_935bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="svg2-p6qx"/><path class="h_v74t7sa wm-k"/><path class="a5g-qvblb wm-k"/><path class="wimcfe0if wm-a"/><path class="pfxq0i3il wm-a"/><path class="rcgtie_rz wm-s"/><path class="sx_935bdq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:screen-share-sketch"} {...others} />);
}

export default Component;
