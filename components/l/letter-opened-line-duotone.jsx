import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ll9kb1b1l.css';
import '../../css/i/irudeebhr.css';
import '../../css/k/k3sddyo-g.css';
import '../../css/c/c0n21jbpg.css';
import '../../css/q/qh-vgybrh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ll9kb1b1l"/><path class="irudeebhr"/><path class="k3sddyo-g"/><path class="c0n21jbpg"/><path class="qh-vgybrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:letter-opened-line-duotone"} {...others} />);
}

export default Component;
