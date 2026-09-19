import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oid5khb-s.css';
import '../../css/j/jh9ostbtu.css';
import '../../css/u/uboxbs2pu.css';
import '../../css/v/v057c6bdj.css';
import '../../css/m/mu8f_sb0x.css';
import '../../css/h/h1uc7_bmb.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><rect fill="url(#SVGTErOteIn)" class="oid5khb-s"/><path fill="url(#SVGVCxf0blh)" class="jh9ostbtu"/><defs><linearGradient id="SVGTErOteIn" x1="4" x2="16" y1="4" y2="16" gradientUnits="userSpaceOnUse"><stop class="uboxbs2pu"/><stop offset="1" class="v057c6bdj"/></linearGradient><linearGradient id="SVGVCxf0blh" x1="3" x2="17" y1="3" y2="17" gradientUnits="userSpaceOnUse"><stop class="mu8f_sb0x"/><stop offset="1" class="h1uc7_bmb"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:table-20"} {...others} />);
}

export default Component;
