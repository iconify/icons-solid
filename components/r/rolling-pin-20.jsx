import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfsmapzzo.css';
import '../../css/v/vkz5pbbmr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bfsmapzzo"/><path class="vkz5pbbmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rolling-pin-20"} {...others} />);
}

export default Component;
