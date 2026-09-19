import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9hqo-dhv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="h9hqo-dhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:phoenix-wordmark"} {...others} />);
}

export default Component;
