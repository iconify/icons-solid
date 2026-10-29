import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kz1ij2bzz.css';
import '../../css/a/aae9c2z5q.css';
import '../../css/w/wo20y1kkc.css';
import '../../css/s/sydfaggaz.css';
import '../../css/p/p8vjvtxac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kz1ij2bzz"/><path class="aae9c2z5q wm-k"/><path class="wm-a wo20y1kkc"/><path class="sydfaggaz wm-k"/><path class="p8vjvtxac wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cable-sketch"} {...others} />);
}

export default Component;
