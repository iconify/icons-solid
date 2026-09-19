import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j771fu0rl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="j771fu0rl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:cairo-wordmark"} {...others} />);
}

export default Component;
