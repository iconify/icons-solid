import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pk9_ohb1s.css';
import '../../css/q/q8prb2btj.css';
import '../../css/v/vhfgw5-us.css';
import '../../css/l/lecpydg2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pk9_ohb1s"/><path class="q8prb2btj"/><path class="vhfgw5-us"/><path class="lecpydg2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:3d-arc-center-pt"} {...others} />);
}

export default Component;
