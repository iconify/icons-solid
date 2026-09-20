import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhpm9o8vk.css';
import '../../css/k/k4v90z5go.css';
import '../../css/h/h32mt3b3t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vhpm9o8vk"/><path class="k4v90z5go"/><path class="h32mt3b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hardcover-light"} {...others} />);
}

export default Component;
