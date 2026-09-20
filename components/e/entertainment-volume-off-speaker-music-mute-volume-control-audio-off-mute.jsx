import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn95nbc_a.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="pn95nbc_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-volume-off-speaker-music-mute-volume-control-audio-off-mute"} {...others} />);
}

export default Component;
