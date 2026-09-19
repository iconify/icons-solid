import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/forqzrbji.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="forqzrbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:ice-pop"} {...others} />);
}

export default Component;
