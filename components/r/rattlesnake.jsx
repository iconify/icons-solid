import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blg0q0b5r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="blg0q0b5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:rattlesnake"} {...others} />);
}

export default Component;
