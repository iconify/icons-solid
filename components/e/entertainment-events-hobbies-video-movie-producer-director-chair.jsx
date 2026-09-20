import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbtsv3bus.css';
import '../../css/g/gtqcty8ki.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vbtsv3bus"/><path class="gtqcty8ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-video-movie-producer-director-chair"} {...others} />);
}

export default Component;
