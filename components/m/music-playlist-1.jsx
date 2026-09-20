import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te4pqlbvd.css';
import '../../css/a/axsuay2_n.css';
import '../../css/o/op0yrwbza.css';
import '../../css/f/feivdrsva.css';
import '../../css/l/l5b33wbnm.css';
import '../../css/t/tbvfvxb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="te4pqlbvd"/><path class="axsuay2_n"/><path class="op0yrwbza"/><path class="feivdrsva"/><path class="l5b33wbnm"/><path class="tbvfvxb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:music-playlist-1"} {...others} />);
}

export default Component;
