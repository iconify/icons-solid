import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmyrtdb4n.css';

const viewBox = {"width":14,"height":14};
const content = `<rect class="mmyrtdb4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-control-button-stop-button-television-buttons-movies-stop-tv-video-controls"} {...others} />);
}

export default Component;
