import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8fdqkbxe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r8fdqkbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:leather-armor"} {...others} />);
}

export default Component;
