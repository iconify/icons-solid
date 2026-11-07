import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/f/fp69pgcrt.css';
import '../../css/l/lbfuos7ub.css';
import '../../css/o/o7iew9atz.css';
import '../../css/k/kpbjqwesw.css';
import '../../css/o/o8epaoc8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="fp69pgcrt"/><path class="lbfuos7ub"/><path class="o7iew9atz"/><path class="kpbjqwesw"/><path class="o8epaoc8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:garage-broken"} {...others} />);
}

export default Component;
