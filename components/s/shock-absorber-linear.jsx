import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uqdxll9yb.css';
import '../../css/z/zwrcacc7r.css';
import '../../css/u/uuw3albgv.css';
import '../../css/q/q93n-7bsi.css';
import '../../css/f/ff84znarb.css';
import '../../css/t/t6qa3zbzk.css';
import '../../css/q/q6bi98b2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uqdxll9yb"/><path class="zwrcacc7r"/><path class="uuw3albgv"/><path class="q93n-7bsi"/><path class="ff84znarb"/><path class="t6qa3zbzk"/><path class="q6bi98b2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shock-absorber-linear"} {...others} />);
}

export default Component;
