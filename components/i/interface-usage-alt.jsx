import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_1vk6bon.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k_1vk6bon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:interface-usage-alt"} {...others} />);
}

export default Component;
