import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id8ma2b6i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="id8ma2b6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:door-ring-handle"} {...others} />);
}

export default Component;
