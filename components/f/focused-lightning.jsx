import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvy7ldnxe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uvy7ldnxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:focused-lightning"} {...others} />);
}

export default Component;
