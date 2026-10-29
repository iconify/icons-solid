import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iaoyh7gpi.css';
import '../../css/q/q511u5m8e.css';
import '../../css/k/k_lneb11t.css';
import '../../css/o/oy6a688zn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="iaoyh7gpi wm-k"/><path class="q511u5m8e wm-shadow"/><path class="k_lneb11t wm-k"/><path class="oy6a688zn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:archive-engrave"} {...others} />);
}

export default Component;
