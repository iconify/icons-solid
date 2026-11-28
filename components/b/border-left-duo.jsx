import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kaquuwg_n.css';
import '../../css/s/s2dxsz5hn.css';
import '../../css/x/x_ktjtb5l.css';
import '../../css/s/sqzde2btt.css';
import '../../css/x/xx1z3ccte.css';
import '../../css/k/kuf1qebvx.css';
import '../../css/t/tb4ptib3x.css';
import '../../css/t/tl5o_yb2y.css';
import '../../css/o/onv_wsb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kaquuwg_n"/><path class="s2dxsz5hn"/><path class="x_ktjtb5l"/><path class="sqzde2btt"/><path class="xx1z3ccte"/><path class="kuf1qebvx"/><path class="tb4ptib3x"/><path class="tl5o_yb2y"/><path class="onv_wsb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:border-left-duo"} {...others} />);
}

export default Component;
