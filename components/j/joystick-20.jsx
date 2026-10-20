import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irh_wpbqi.css';
import '../../css/t/t_i7wlb6k.css';
import '../../css/e/e71fuis0w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="irh_wpbqi"/><path class="t_i7wlb6k"/><path class="e71fuis0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:joystick-20"} {...others} />);
}

export default Component;
