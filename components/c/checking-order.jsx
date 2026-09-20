import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ayr7ewb4c.css';
import '../../css/q/qcpq8obps.css';
import '../../css/s/spvs_h2al.css';
import '../../css/t/t-ffzbbyz.css';
import '../../css/k/knxoplgbx.css';
import '../../css/c/cbt54ab0r.css';
import '../../css/e/emzutlb3a.css';

const viewBox = {"width":41,"height":41,"left":-0.5};
const content = `<g class="ft5dv1b6b"><path class="ayr7ewb4c"/><path class="qcpq8obps"/><path class="spvs_h2al"/><path class="t-ffzbbyz"/><path class="knxoplgbx"/><path class="cbt54ab0r"/><path class="emzutlb3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:checking-order"} {...others} />);
}

export default Component;
