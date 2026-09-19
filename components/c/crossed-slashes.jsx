import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn_vt--sv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mn_vt--sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:crossed-slashes"} {...others} />);
}

export default Component;
