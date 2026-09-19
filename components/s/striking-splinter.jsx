import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p08cwsb5m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p08cwsb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:striking-splinter"} {...others} />);
}

export default Component;
