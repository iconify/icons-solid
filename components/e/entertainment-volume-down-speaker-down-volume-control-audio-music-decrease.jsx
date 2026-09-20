import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxce8tbyt.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="oxce8tbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-volume-down-speaker-down-volume-control-audio-music-decrease"} {...others} />);
}

export default Component;
