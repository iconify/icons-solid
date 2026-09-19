import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2jyzqbvk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k2jyzqbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:exploding-planet"} {...others} />);
}

export default Component;
