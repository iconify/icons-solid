import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bsuu7tbrz.css';
import '../../css/q/qp2lgeb1b.css';
import '../../css/l/l_fy6mn2a.css';
import '../../css/y/y7q--ac_t.css';
import '../../css/t/te9ddab6d.css';
import '../../css/l/l-rfgwb-j.css';
import '../../css/k/kb7-p4vrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bsuu7tbrz wm-k"/><path class="qp2lgeb1b wm-a"/><path class="l_fy6mn2a wm-a"/><path class="wm-k y7q--ac_t"/><path class="te9ddab6d wm-shadow"/><path class="l-rfgwb-j wm-k"/><path class="kb7-p4vrd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:log-out-engrave"} {...others} />);
}

export default Component;
