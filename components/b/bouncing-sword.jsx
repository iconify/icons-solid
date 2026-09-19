import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxnef9jnz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yxnef9jnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:bouncing-sword"} {...others} />);
}

export default Component;
