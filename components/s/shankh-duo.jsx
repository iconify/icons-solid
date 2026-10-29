import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mvbkdybul.css';
import '../../css/z/zsv0x98ph.css';
import '../../css/j/jr5oamekb.css';
import '../../css/l/l0_d9_beu.css';
import '../../css/p/pq4u4ksec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mvbkdybul"/><path class="zsv0x98ph"/><path class="jr5oamekb wm-a"/><path class="l0_d9_beu"/><path class="pq4u4ksec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shankh-duo"} {...others} />);
}

export default Component;
