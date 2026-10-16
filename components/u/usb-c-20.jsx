import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7m3inbym.css';
import '../../css/c/cbgy24bmz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e7m3inbym"/><path class="cbgy24bmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:usb-c-20"} {...others} />);
}

export default Component;
