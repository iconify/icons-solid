import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xyjtgccot.css';
import '../../css/r/r_uy20bmg.css';
import '../../css/f/f3dvmbchy.css';
import '../../css/z/z_d_qqbvd.css';
import '../../css/u/uqtnhfbgz.css';
import '../../css/g/g_1jxb44q.css';
import '../../css/o/oge-6obhz.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><g class="xyjtgccot"><path class="r_uy20bmg"/><path class="f3dvmbchy"/><path class="z_d_qqbvd"/></g><path class="uqtnhfbgz"/><path class="g_1jxb44q"/><path class="oge-6obhz"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-right-circle"} {...others} />);
}

export default Component;
