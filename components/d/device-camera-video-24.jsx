import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymj9h20wk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ymj9h20wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:device-camera-video-24"} {...others} />);
}

export default Component;
