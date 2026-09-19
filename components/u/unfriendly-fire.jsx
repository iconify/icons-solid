import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tiog0gj8y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tiog0gj8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:unfriendly-fire"} {...others} />);
}

export default Component;
