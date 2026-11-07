import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gmk9o9b1o.css';
import '../../css/i/irudeebhr.css';
import '../../css/k/k3sddyo-g.css';
import '../../css/j/jr2f22bmk.css';
import '../../css/q/qh-vgybrh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gmk9o9b1o"/><path class="irudeebhr"/><path class="k3sddyo-g"/><path class="jr2f22bmk"/><path class="qh-vgybrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:letter-opened-line-duotone"} {...others} />);
}

export default Component;
