import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsqfwjh1e.css';
import '../../css/q/q4epzmbzj.css';
import '../../css/u/u-5hmbhtr.css';
import '../../css/t/t3rtxgyrq.css';
import '../../css/w/wnq1afbdt.css';
import '../../css/y/yrbmq67ab.css';
import '../../css/r/rmg5xpb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lsqfwjh1e"/><path class="q4epzmbzj"/><path class="u-5hmbhtr"/><path class="t3rtxgyrq"/><path class="wnq1afbdt"/><path class="yrbmq67ab"/><path class="rmg5xpb9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:optimization-graph"} {...others} />);
}

export default Component;
