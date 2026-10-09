import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs8-z_yps.css';
import '../../css/e/ezgqvohnj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gs8-z_yps"/><path class="ezgqvohnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crop-20-bold"} {...others} />);
}

export default Component;
