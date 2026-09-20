import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tui7j42qx.css';
import '../../css/w/wi6_rehvw.css';
import '../../css/i/ivaodjues.css';
import '../../css/v/virt1wb1m.css';
import '../../css/h/h6lsowbxw.css';
import '../../css/e/efgsmwbpg.css';
import '../../css/w/wthq2ybof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tui7j42qx"/><path class="wi6_rehvw"/><path class="ivaodjues"/><path class="virt1wb1m"/><path class="h6lsowbxw"/><path class="efgsmwbpg"/><path class="wthq2ybof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:star-wars-r2"} {...others} />);
}

export default Component;
