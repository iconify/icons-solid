import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elr-ebcxy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="elr-ebcxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:confrontation"} {...others} />);
}

export default Component;
