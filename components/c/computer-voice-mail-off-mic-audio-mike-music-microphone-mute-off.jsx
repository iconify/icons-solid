import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3w73pktn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="x3w73pktn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-voice-mail-off-mic-audio-mike-music-microphone-mute-off"} {...others} />);
}

export default Component;
