import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciz_d-bql.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ciz_d-bql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls"} {...others} />);
}

export default Component;
