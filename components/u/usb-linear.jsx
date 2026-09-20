import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/swsab_86e.css';
import '../../css/f/fw5rt46mg.css';
import '../../css/c/clsyeylvw.css';
import '../../css/j/jqt39-bbm.css';
import '../../css/q/q6cbe7bnx.css';
import '../../css/k/kwa31tbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="swsab_86e"/><circle class="fw5rt46mg"/><path class="clsyeylvw"/><path class="jqt39-bbm"/><path class="q6cbe7bnx"/><path class="kwa31tbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:usb-linear"} {...others} />);
}

export default Component;
