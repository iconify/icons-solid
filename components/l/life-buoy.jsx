import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9z3grv4e.css';
import '../../css/p/p2v6v82hv.css';
import '../../css/m/m47bcrbvx.css';
import '../../css/s/s6g5f5bwh.css';
import '../../css/k/kwpurbbtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h9z3grv4e wm-k"/><path class="p2v6v82hv wm-k"/><path class="m47bcrbvx wm-k"/><path class="s6g5f5bwh wm-shine"/><path class="kwpurbbtu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:life-buoy"} {...others} />);
}

export default Component;
