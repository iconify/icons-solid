import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8tz3qzqj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k8tz3qzqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:gazebo-wordmark"} {...others} />);
}

export default Component;
