import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpt327yfs.css';
import '../../css/t/tbow3qh2l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gpt327yfs"/><path class="tbow3qh2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-20"} {...others} />);
}

export default Component;
