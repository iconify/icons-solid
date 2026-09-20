import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0tuhogfj.css';

const viewBox = {"width":14,"height":14};
const content = `<circle class="i0tuhogfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-control-button-record-3-button-television-buttons-movies-record-tv-video-controls"} {...others} />);
}

export default Component;
