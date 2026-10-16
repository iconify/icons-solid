import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9aiyrfai.css';
import '../../css/t/tubi0bbkz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i9aiyrfai"/><path class="tubi0bbkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alarm-clock-off-20"} {...others} />);
}

export default Component;
