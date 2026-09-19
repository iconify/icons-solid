import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy0zccidy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qy0zccidy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:floating-tentacles"} {...others} />);
}

export default Component;
