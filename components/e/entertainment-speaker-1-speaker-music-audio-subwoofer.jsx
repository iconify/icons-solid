import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ac3zf5k8h.css';
import '../../css/n/ntpd7fc4k.css';
import '../../css/c/cq971jbmr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ac3zf5k8h"/><circle class="ntpd7fc4k"/><circle class="cq971jbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-speaker-1-speaker-music-audio-subwoofer"} {...others} />);
}

export default Component;
