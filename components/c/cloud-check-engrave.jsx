import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fzzq1qbts.css';
import '../../css/f/fnhpvhadu.css';
import '../../css/q/q_0am-9er.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/o/oainz1w_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fzzq1qbts wm-k"/><path class="fnhpvhadu wm-s"/><path class="q_0am-9er wm-shadow"/><path class="m2ebxhp-u wm-k"/><path class="oainz1w_v wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-check-engrave"} {...others} />);
}

export default Component;
