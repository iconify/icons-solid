import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndqwi9bcc.css';
import '../../css/h/h5s-pvbvf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ndqwi9bcc"/><path class="h5s-pvbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smartphone-charging-20-bold"} {...others} />);
}

export default Component;
