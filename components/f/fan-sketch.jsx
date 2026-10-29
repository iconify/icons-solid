import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lmla34nnh.css';
import '../../css/s/stk13fbal.css';
import '../../css/s/suvv_lbra.css';
import '../../css/n/ni2pyrbla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lmla34nnh wm-k"/><path class="stk13fbal wm-a"/><path class="suvv_lbra wm-k"/><path class="ni2pyrbla wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fan-sketch"} {...others} />);
}

export default Component;
