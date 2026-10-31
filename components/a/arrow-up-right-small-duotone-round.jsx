import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vb7dkx9rl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vb7dkx9rl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-up-right-small-duotone-round"} {...others} />);
}

export default Component;
