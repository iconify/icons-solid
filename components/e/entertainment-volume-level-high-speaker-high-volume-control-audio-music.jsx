import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq7suuqlf.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kq7suuqlf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-volume-level-high-speaker-high-volume-control-audio-music"} {...others} />);
}

export default Component;
