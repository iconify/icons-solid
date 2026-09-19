import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0wi9crkl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o0wi9crkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:tarot-05-the-hierophant"} {...others} />);
}

export default Component;
