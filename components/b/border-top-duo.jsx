import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zvufhhb6y.css';
import '../../css/r/rxtr1zhvq.css';
import '../../css/z/zur3_u58h.css';
import '../../css/n/nni1mzb_z.css';
import '../../css/x/x_ktjtb5l.css';
import '../../css/x/xx1z3ccte.css';
import '../../css/t/tb4ptib3x.css';
import '../../css/t/tl5o_yb2y.css';
import '../../css/o/onv_wsb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zvufhhb6y"/><path class="rxtr1zhvq"/><path class="zur3_u58h"/><path class="nni1mzb_z"/><path class="x_ktjtb5l"/><path class="xx1z3ccte"/><path class="tb4ptib3x"/><path class="tl5o_yb2y"/><path class="onv_wsb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:border-top-duo"} {...others} />);
}

export default Component;
