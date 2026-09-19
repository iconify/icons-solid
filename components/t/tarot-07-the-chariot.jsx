import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8a2d4biq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q8a2d4biq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:tarot-07-the-chariot"} {...others} />);
}

export default Component;
