import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kurhn23aa.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kurhn23aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-control-button-next-button-television-buttons-movies-skip-next-video-controls"} {...others} />);
}

export default Component;
