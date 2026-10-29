import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro7tz4bzv.css';
import '../../css/h/h_ffhdx3r.css';
import '../../css/e/e1_59bbxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ro7tz4bzv wm-k"/><path class="h_ffhdx3r wm-a"/><path class="e1_59bbxb wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:indian-rupee"} {...others} />);
}

export default Component;
