import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk6fjp9qb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vk6fjp9qb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:signal-strength-5"} {...others} />);
}

export default Component;
