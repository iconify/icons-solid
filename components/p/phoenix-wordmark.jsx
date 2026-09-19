import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w456yoqax.css';
import '../../css/d/d_jwqly5w.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="w456yoqax"/><path class="d_jwqly5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:phoenix-wordmark"} {...others} />);
}

export default Component;
