import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5hl_xoez.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i5hl_xoez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:thor-fist"} {...others} />);
}

export default Component;
