import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/i/irp8ccchz.css';
import '../../css/i/iawjh31xa.css';
import '../../css/k/kd-0aibfs.css';
import '../../css/v/vtiaafd8f.css';
import '../../css/k/kftdv7k3g.css';
import '../../css/q/qgt064bwt.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="irp8ccchz"/><path class="iawjh31xa"/><path class="kd-0aibfs"/></g><path class="vtiaafd8f"/><path class="kftdv7k3g"/><path class="qgt064bwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-right"} {...others} />);
}

export default Component;
