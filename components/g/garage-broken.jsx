import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/m/md81yabka.css';
import '../../css/l/lbfuos7ub.css';
import '../../css/e/eka4nt00k.css';
import '../../css/s/s7sgeqysz.css';
import '../../css/q/qovygmfcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="md81yabka"/><path class="lbfuos7ub"/><path class="eka4nt00k"/><path class="s7sgeqysz"/><path class="qovygmfcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:garage-broken"} {...others} />);
}

export default Component;
