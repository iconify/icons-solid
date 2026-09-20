import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r4lf3nb_v.css';
import '../../css/c/cm_p9_bxs.css';
import '../../css/w/wix0ambfv.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r4lf3nb_v"/><path class="cm_p9_bxs"/><path class="wix0ambfv"/><path class="si_mtzbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-minimalistic-broken"} {...others} />);
}

export default Component;
