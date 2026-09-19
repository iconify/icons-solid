import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwrlgdc4r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cwrlgdc4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:camel-head"} {...others} />);
}

export default Component;
