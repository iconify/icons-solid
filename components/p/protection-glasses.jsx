import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywnk-4bol.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ywnk-4bol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:protection-glasses"} {...others} />);
}

export default Component;
