import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gshkn9qqt.css';
import '../../css/s/srug0hb7t.css';
import '../../css/x/xme672xeh.css';
import '../../css/v/vnda1s8vz.css';
import '../../css/x/xv6kuw8hw.css';
import '../../css/o/oxdhi_ktu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gshkn9qqt"/><path class="srug0hb7t"/><path class="xme672xeh"/><path class="vnda1s8vz"/><path class="xv6kuw8hw"/><path class="oxdhi_ktu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-vacuum-cleaner-linear"} {...others} />);
}

export default Component;
