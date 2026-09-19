import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6d77db6s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c6d77db6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:perspective-dice-five"} {...others} />);
}

export default Component;
