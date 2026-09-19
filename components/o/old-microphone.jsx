import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv3vtfbhd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mv3vtfbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:old-microphone"} {...others} />);
}

export default Component;
