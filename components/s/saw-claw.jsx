import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l39_x8vnd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l39_x8vnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:saw-claw"} {...others} />);
}

export default Component;
