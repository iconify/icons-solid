import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpl0vrboh.css';
import '../../css/c/cktrgqbhj.css';
import '../../css/n/np5odjbet.css';
import '../../css/d/dlomfabec.css';
import '../../css/z/zkivhwe3x.css';
import '../../css/q/qf-r78bev.css';
import '../../css/x/xpxu8z51d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qpl0vrboh"/><path class="cktrgqbhj"/><path class="np5odjbet"/><path class="dlomfabec"/><path class="zkivhwe3x"/><path class="qf-r78bev"/><path class="xpxu8z51d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:vip-crown-queen-1"} {...others} />);
}

export default Component;
