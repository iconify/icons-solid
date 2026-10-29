import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e8mhx6bnd.css';
import '../../css/h/hpjvobbts.css';
import '../../css/o/orupijbnu.css';
import '../../css/h/hnvjbpuwe.css';
import '../../css/g/gav9x_bhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e8mhx6bnd wm-k"/><path class="hpjvobbts wm-a"/><path class="orupijbnu wm-shadow"/><path class="hnvjbpuwe wm-k"/><path class="gav9x_bhv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:log-in-engrave"} {...others} />);
}

export default Component;
