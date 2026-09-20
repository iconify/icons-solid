import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7yby9bla.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="m7yby9bla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-volume-level-off-volume-speaker-control-music-audio"} {...others} />);
}

export default Component;
