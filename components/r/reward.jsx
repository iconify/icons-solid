import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/f/fv8gt4pzo.css';
import '../../css/r/rj4dk3cvk.css';
import '../../css/b/bu236ub9n.css';
import '../../css/v/v4vpn-bne.css';
import '../../css/x/xlyn-bcur.css';
import '../../css/m/mhsg6qbpj.css';
import '../../css/v/vg4l-cctl.css';
import '../../css/r/rrradqbbi.css';

const viewBox = {"width":41,"height":41,"top":-0.5};
const content = `<g class="umm606kxf"><path class="fv8gt4pzo"/><path class="rj4dk3cvk"/><path class="bu236ub9n"/><path class="v4vpn-bne"/><path class="xlyn-bcur"/><path class="mhsg6qbpj"/><path class="vg4l-cctl"/><path class="rrradqbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:reward"} {...others} />);
}

export default Component;
