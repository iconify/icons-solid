import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dcqoumbac.css';
import '../../css/r/r3yr01bjg.css';
import '../../css/x/xrfn3bcyz.css';
import '../../css/q/qx-ll7bdv.css';
import '../../css/x/xkpay_b2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dcqoumbac wm-k"/><path class="r3yr01bjg wm-shadow"/><path class="wm-k xrfn3bcyz"/><path class="qx-ll7bdv wm-a"/><path class="wm-a xkpay_b2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-x-engrave"} {...others} />);
}

export default Component;
