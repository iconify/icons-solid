import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g81aj0bod.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="g81aj0bod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-volume-mute-speaker-remove-volume-control-audio-music-mute-off"} {...others} />);
}

export default Component;
