import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if44z4kgq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="if44z4kgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:githubcopilot-wordmark"} {...others} />);
}

export default Component;
