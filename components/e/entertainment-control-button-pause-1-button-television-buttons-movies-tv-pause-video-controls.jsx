import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m03t3ybdp.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="m03t3ybdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-control-button-pause-1-button-television-buttons-movies-tv-pause-video-controls"} {...others} />);
}

export default Component;
