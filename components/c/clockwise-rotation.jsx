import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzqo1xb1t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lzqo1xb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:clockwise-rotation"} {...others} />);
}

export default Component;
