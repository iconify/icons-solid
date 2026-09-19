import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6x4u0bao.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="g6x4u0bao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vite-wordmark"} {...others} />);
}

export default Component;
