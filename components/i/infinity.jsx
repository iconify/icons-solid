import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/plvza9b3h.css';
import '../../css/w/wd3vufbvr.css';
import '../../css/j/jm9zyqicg.css';
import '../../css/m/mxv_rthvy.css';
import '../../css/d/dvmbsvbya.css';
import '../../css/l/lpjkbubap.css';
import '../../css/h/hh-lvsb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="plvza9b3h wm-shadow"/><path class="wd3vufbvr wm-k"/><path class="jm9zyqicg wm-k"/><path class="mxv_rthvy wm-k"/><path class="dvmbsvbya wm-k"/><path class="lpjkbubap wm-k"/><path class="hh-lvsb3l wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:infinity"} {...others} />);
}

export default Component;
