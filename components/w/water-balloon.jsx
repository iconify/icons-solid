import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifwaa2b9c.css';
import '../../css/o/o0oc8hmkr.css';
import '../../css/y/y_wzz1bhb.css';
import '../../css/i/ikp9yfzlu.css';
import '../../css/i/iw_fssbom.css';
import '../../css/n/n7bgz8b0l.css';
import '../../css/z/zlxqiccjz.css';
import '../../css/e/e50q1ubor.css';
import '../../css/q/qr4unccjx.css';
import '../../css/v/vimj0jwvc.css';
import '../../css/y/y-pq1wfrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ifwaa2b9c wm-shadow"/><path class="o0oc8hmkr wm-shadow"/><path class="y_wzz1bhb"/><path class="ikp9yfzlu"/><path class="iw_fssbom"/><path class="n7bgz8b0l"/><path class="wm-shine zlxqiccjz"/><path class="e50q1ubor wm-shine"/><path class="qr4unccjx"/><path class="vimj0jwvc"/><path class="y-pq1wfrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:water-balloon"} {...others} />);
}

export default Component;
