import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgkj53bit.css';
import '../../css/e/ewpaxfbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cgkj53bit"/><path class="ewpaxfbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:usb-circle-bold-duotone"} {...others} />);
}

export default Component;
