import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo71e5b1u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xo71e5b1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:perspective-dice-two"} {...others} />);
}

export default Component;
