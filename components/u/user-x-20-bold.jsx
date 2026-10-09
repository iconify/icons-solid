import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_l8cd96n.css';
import '../../css/y/yo_3w-v9d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h_l8cd96n"/><path class="yo_3w-v9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-x-20-bold"} {...others} />);
}

export default Component;
