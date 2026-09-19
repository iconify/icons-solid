import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylxpa8bdu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ylxpa8bdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:milk-carton"} {...others} />);
}

export default Component;
