import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am5y5t-sc.css';
import '../../css/b/boyp-lbqb.css';
import '../../css/x/xhzrf-git.css';
import '../../css/q/qd_ofctrz.css';
import '../../css/t/tpwr2b2-q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="am5y5t-sc"/><path class="boyp-lbqb"/><path class="xhzrf-git"/><path class="qd_ofctrz"/><path class="tpwr2b2-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:online-medical-service-monitor"} {...others} />);
}

export default Component;
