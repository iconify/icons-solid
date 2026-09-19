import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/par4x9bhq.css';
import '../../css/i/ivsg4dbkt.css';
import '../../css/r/ryz94svvw.css';
import '../../css/f/fg1y5-srt.css';
import '../../css/p/p572u4buk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="par4x9bhq"/><path class="ivsg4dbkt"/><path class="ryz94svvw"/><path class="fg1y5-srt"/><path class="p572u4buk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pandaface"} {...others} />);
}

export default Component;
