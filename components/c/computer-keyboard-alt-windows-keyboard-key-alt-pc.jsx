import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eww82xbjb.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="eww82xbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-keyboard-alt-windows-keyboard-key-alt-pc"} {...others} />);
}

export default Component;
