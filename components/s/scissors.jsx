import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkv4lj3ug.css';

const viewBox = {"width":512,"height":472};
const content = `<path class="vkv4lj3ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:scissors"} {...others} />);
}

export default Component;
