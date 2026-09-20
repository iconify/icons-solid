import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ek9i4zbca.css';
import '../../css/m/m9u3gubwc.css';
import '../../css/m/m-qn_rbyu.css';
import '../../css/a/ap2s0m7in.css';
import '../../css/q/q9owr1m9n.css';
import '../../css/w/wng0vw_sp.css';
import '../../css/t/tpnfn4b2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ek9i4zbca"/><path class="m9u3gubwc"/><path class="m-qn_rbyu"/><path class="ap2s0m7in"/><path class="q9owr1m9n"/><path class="wng0vw_sp"/><path class="tpnfn4b2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-no-charge-bold-duotone"} {...others} />);
}

export default Component;
