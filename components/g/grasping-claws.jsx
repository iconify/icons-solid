import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfe2s8iii.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jfe2s8iii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:grasping-claws"} {...others} />);
}

export default Component;
