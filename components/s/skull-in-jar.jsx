import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmo3-snvx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rmo3-snvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:skull-in-jar"} {...others} />);
}

export default Component;
