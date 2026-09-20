import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7vk71b4y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y7vk71b4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:join-corner-arrow-5"} {...others} />);
}

export default Component;
