import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-8cqhsas.css';
import '../../css/m/mapyakbwg.css';
import '../../css/f/fmwxkxb7y.css';
import '../../css/z/zo3956ytn.css';
import '../../css/l/lavdo4pic.css';
import '../../css/d/d6a0jp6lc.css';
import '../../css/r/ri3g6cbfw.css';
import '../../css/c/ce0gevbad.css';
import '../../css/f/fzyko01oc.css';
import '../../css/d/dsyxw1bil.css';
import '../../css/y/yhkdcib9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t-8cqhsas wm-shadow"/><path class="mapyakbwg wm-shadow"/><path class="fmwxkxb7y"/><path class="zo3956ytn"/><path class="lavdo4pic"/><path class="d6a0jp6lc"/><path class="ri3g6cbfw"/><path class="ce0gevbad"/><path class="fzyko01oc"/><path class="dsyxw1bil"/><path class="yhkdcib9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:file-check"} {...others} />);
}

export default Component;
