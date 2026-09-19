import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcsx5kbyb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pcsx5kbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:falling-blob"} {...others} />);
}

export default Component;
