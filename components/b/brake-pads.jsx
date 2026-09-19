import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s_m7_kbev.css';
import '../../css/r/r2b3htb0e.css';
import '../../css/d/didw3mbph.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="s_m7_kbev"/><path class="r2b3htb0e"/><path class="didw3mbph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:brake-pads"} {...others} />);
}

export default Component;
