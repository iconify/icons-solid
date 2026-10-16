import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itqentznz.css';
import '../../css/l/l_y65ob0n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="itqentznz"/><path class="l_y65ob0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:usb-c-20-bold"} {...others} />);
}

export default Component;
