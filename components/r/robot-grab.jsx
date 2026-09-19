import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5x8k7b2h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a5x8k7b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:robot-grab"} {...others} />);
}

export default Component;
