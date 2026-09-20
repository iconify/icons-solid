import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w19i0ospy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w19i0ospy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:video-camera"} {...others} />);
}

export default Component;
