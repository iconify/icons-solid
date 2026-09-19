import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-bp5d1bn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w-bp5d1bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:round-shield"} {...others} />);
}

export default Component;
