import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov_j_ngpa.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ov_j_ngpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-id-voice-1-identification-secure-id-soundwave-sound-voice-security"} {...others} />);
}

export default Component;
