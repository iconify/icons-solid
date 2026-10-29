import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hr84_mboe.css';
import '../../css/c/carfp9bke.css';
import '../../css/y/y-dhaqukq.css';
import '../../css/h/hofghuxfk.css';
import '../../css/u/ud8m1bcwq.css';
import '../../css/t/tk6neac7h.css';
import '../../css/n/nsji1wb5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hr84_mboe wm-a"/><path class="carfp9bke wm-a"/><path class="wm-a y-dhaqukq"/><path class="hofghuxfk wm-k"/><path class="ud8m1bcwq wm-k"/><path class="tk6neac7h wm-k"/><path class="nsji1wb5l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:shovel"} {...others} />);
}

export default Component;
