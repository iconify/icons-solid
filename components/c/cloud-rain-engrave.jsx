import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_jv868wi.css';
import '../../css/u/uyg_llr-r.css';
import '../../css/h/h13gbmb1u.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/d/dwntyeyxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u_jv868wi wm-k"/><path class="uyg_llr-r wm-a"/><path class="h13gbmb1u wm-shadow"/><path class="lhr7mp78x wm-k"/><path class="dwntyeyxt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-rain-engrave"} {...others} />);
}

export default Component;
