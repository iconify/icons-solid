import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-8cqhsas.css';
import '../../css/m/mapyakbwg.css';
import '../../css/f/fmwxkxb7y.css';
import '../../css/z/zo3956ytn.css';
import '../../css/l/lavdo4pic.css';
import '../../css/d/d6a0jp6lc.css';
import '../../css/m/muk8hacjm.css';
import '../../css/r/rw4fwudix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t-8cqhsas wm-shadow"/><path class="mapyakbwg wm-shadow"/><path class="fmwxkxb7y"/><path class="zo3956ytn"/><path class="lavdo4pic"/><path class="d6a0jp6lc"/><path class="muk8hacjm"/><path class="rw4fwudix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:file-chart"} {...others} />);
}

export default Component;
