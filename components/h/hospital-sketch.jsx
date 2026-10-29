import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qzg7_0n5n.css';
import '../../css/e/e-03izbfa.css';
import '../../css/q/q9ldof2um.css';
import '../../css/n/nnnwjibgk.css';
import '../../css/m/mqvh0tbrc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qzg7_0n5n"/><path class="e-03izbfa wm-k"/><path class="q9ldof2um wm-a"/><path class="nnnwjibgk wm-k"/><path class="mqvh0tbrc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hospital-sketch"} {...others} />);
}

export default Component;
