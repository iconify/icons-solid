import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/urw3wlb_h.css';
import '../../css/k/k-7ob-64q.css';
import '../../css/m/mdrht3tia.css';
import '../../css/w/wx8xdljlm.css';
import '../../css/c/cnrsspubr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="urw3wlb_h"/><path class="k-7ob-64q wm-k"/><path class="mdrht3tia wm-a"/><path class="wm-k wx8xdljlm"/><path class="cnrsspubr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cup-soda-sketch"} {...others} />);
}

export default Component;
