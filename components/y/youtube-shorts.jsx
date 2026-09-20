import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yeug8pb_s.css';
import '../../css/k/kifmwrb0s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yeug8pb_s"/><path class="kifmwrb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:youtube-shorts"} {...others} />);
}

export default Component;
