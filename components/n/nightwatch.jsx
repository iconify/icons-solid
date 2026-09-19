import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq8uv6ybu.css';

const viewBox = {"width":423,"height":512};
const content = `<path class="rq8uv6ybu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:nightwatch"} {...others} />);
}

export default Component;
