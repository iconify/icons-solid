import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_07w6bdi.css';
import '../../css/s/s2rg5k4vy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y_07w6bdi"/><path class="s2rg5k4vy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:welding-mask-20"} {...others} />);
}

export default Component;
