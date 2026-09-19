import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f2x_z7q2l.css';
import '../../css/d/dq1y72c_v.css';
import '../../css/w/wl2trwb_h.css';
import '../../css/d/dtk7ngb6k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="f2x_z7q2l"/><path class="dq1y72c_v"/><path class="wl2trwb_h"/><path class="dtk7ngb6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-text-bottom"} {...others} />);
}

export default Component;
