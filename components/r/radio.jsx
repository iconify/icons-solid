import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3o4v_bul.css';
import '../../css/r/rdhxn-bpo.css';
import '../../css/r/r-40nkb-i.css';
import '../../css/t/tpc3akbba.css';
import '../../css/o/omcq-ibvt.css';
import '../../css/g/g_u53lnib.css';
import '../../css/u/ug2-tibnv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m3o4v_bul"/><path class="rdhxn-bpo"/><path class="r-40nkb-i"/><path class="tpc3akbba"/><path class="omcq-ibvt"/><path class="g_u53lnib"/><path class="ug2-tibnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:radio"} {...others} />);
}

export default Component;
