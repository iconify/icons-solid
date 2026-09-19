import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in3z5o4jq.css';
import '../../css/e/etos_bc7r.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="in3z5o4jq"/><path class="etos_bc7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:biome-wordmark"} {...others} />);
}

export default Component;
