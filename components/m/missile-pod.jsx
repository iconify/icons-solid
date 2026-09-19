import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri7kwcc0e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ri7kwcc0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:missile-pod"} {...others} />);
}

export default Component;
