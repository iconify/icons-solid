import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_vf0_b6s.css';
import '../../css/p/ph4zn2b4t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f_vf0_b6s"/><path class="ph4zn2b4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smartphone-vibrate-20-bold"} {...others} />);
}

export default Component;
