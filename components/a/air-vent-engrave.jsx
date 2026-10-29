import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qp1wmjbgs.css';
import '../../css/a/a7nzgbnmk.css';
import '../../css/m/miccu2bbd.css';
import '../../css/j/j1_apjast.css';
import '../../css/g/gn83_cb7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qp1wmjbgs wm-k"/><path class="a7nzgbnmk wm-a"/><path class="miccu2bbd wm-shadow"/><path class="j1_apjast wm-k"/><path class="gn83_cb7i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:air-vent-engrave"} {...others} />);
}

export default Component;
