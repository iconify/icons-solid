import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xyjtgccot.css';
import '../../css/m/mpccti89c.css';
import '../../css/x/xd2qs_j1b.css';
import '../../css/m/m98gijb1j.css';
import '../../css/t/t9pa4cczn.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><g class="xyjtgccot"><path class="mpccti89c"/><path class="xd2qs_j1b"/></g><path class="m98gijb1j"/><path class="t9pa4cczn"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:hash-circle"} {...others} />);
}

export default Component;
