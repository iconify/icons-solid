import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpw-f0nxu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cpw-f0nxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:spock-hand"} {...others} />);
}

export default Component;
