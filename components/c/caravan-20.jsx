import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm_8txhtx.css';
import '../../css/p/pw6vk1b4e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tm_8txhtx"/><path class="pw6vk1b4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:caravan-20"} {...others} />);
}

export default Component;
