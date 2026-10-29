import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhajezm4h.css';
import '../../css/r/ryhto-bvv.css';
import '../../css/k/kmvrzrb-o.css';
import '../../css/t/t_-ukob-o.css';
import '../../css/n/nm2plbb3d.css';
import '../../css/w/w-jynsbpq.css';
import '../../css/z/zhj9q_b-u.css';
import '../../css/w/w6htwwb0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow yhajezm4h"/><path class="ryhto-bvv wm-k"/><path class="kmvrzrb-o wm-k"/><path class="t_-ukob-o wm-k"/><path class="nm2plbb3d wm-k"/><path class="w-jynsbpq wm-shine"/><path class="wm-k zhj9q_b-u"/><path class="w6htwwb0e wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:cube"} {...others} />);
}

export default Component;
