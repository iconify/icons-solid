import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd21t8b0d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fd21t8b0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-game-controller-a"} {...others} />);
}

export default Component;
