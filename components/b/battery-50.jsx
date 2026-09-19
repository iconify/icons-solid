import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onw2bx3kd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="onw2bx3kd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:battery-50"} {...others} />);
}

export default Component;
