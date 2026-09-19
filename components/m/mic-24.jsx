import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mj8g0_buh.css';
import '../../css/o/oo4ltlopd.css';
import '../../css/l/l8zfi6bbl.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/g/gsug0sx0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGEVaLmepR)" class="mj8g0_buh"/><path fill="url(#SVGFMkYgcjm)" class="oo4ltlopd"/><defs><linearGradient id="SVGEVaLmepR" x1="4.75" x2="12.11" y1="5.813" y2="23.184" gradientUnits="userSpaceOnUse"><stop class="l8zfi6bbl"/><stop offset="1" class="tt8br1bqq"/></linearGradient><linearGradient id="SVGFMkYgcjm" x1="6" x2="13.346" y1="-1.182" y2="23.828" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset="1" class="gsug0sx0f"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:mic-24"} {...others} />);
}

export default Component;
