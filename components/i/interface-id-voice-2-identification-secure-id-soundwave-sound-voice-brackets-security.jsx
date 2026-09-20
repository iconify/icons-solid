import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekb0a1zjf.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ekb0a1zjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-id-voice-2-identification-secure-id-soundwave-sound-voice-brackets-security"} {...others} />);
}

export default Component;
