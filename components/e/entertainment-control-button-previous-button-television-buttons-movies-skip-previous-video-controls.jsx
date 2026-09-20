import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvr7a3bqs.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="lvr7a3bqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-control-button-previous-button-television-buttons-movies-skip-previous-video-controls"} {...others} />);
}

export default Component;
