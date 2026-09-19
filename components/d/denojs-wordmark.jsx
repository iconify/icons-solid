import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8e6r52as.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="y8e6r52as"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:denojs-wordmark"} {...others} />);
}

export default Component;
