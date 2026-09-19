import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut-71fb_j.css';
import '../../css/n/nlgbk_b2q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ut-71fb_j"/><path class="nlgbk_b2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:k3os-wordmark"} {...others} />);
}

export default Component;
