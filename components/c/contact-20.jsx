import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx89adb5k.css';
import '../../css/p/p-13vkqjz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bx89adb5k"/><path class="p-13vkqjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contact-20"} {...others} />);
}

export default Component;
