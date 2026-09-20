import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/t/te-0t6rgn.css';
import '../../css/h/he8xujbzx.css';
import '../../css/r/r53dm4bds.css';
import '../../css/g/g_8lrzb7q.css';
import '../../css/x/x-exdccqr.css';
import '../../css/s/so9dkqjrz.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="te-0t6rgn"/><path class="he8xujbzx"/><path class="r53dm4bds"/></g><path class="g_8lrzb7q"/><path class="x-exdccqr"/><path class="so9dkqjrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-up-right"} {...others} />);
}

export default Component;
