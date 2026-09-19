import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccr8qtrht.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ccr8qtrht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:anticlockwise-rotation"} {...others} />);
}

export default Component;
