import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ou178mb0p.css';
import '../../css/q/qxfn8d-3k.css';
import '../../css/f/frdjkvbwc.css';
import '../../css/q/qj6lnubuz.css';
import '../../css/q/qow-g6g7f.css';
import '../../css/m/mvooyyb5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ou178mb0p"/><path class="qxfn8d-3k"/><rect transform="matrix(0 -1 -1 0 14.42 12.64)" class="frdjkvbwc"/><path class="qj6lnubuz"/><path class="qow-g6g7f"/><path class="mvooyyb5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bow-tie-ribbon"} {...others} />);
}

export default Component;
