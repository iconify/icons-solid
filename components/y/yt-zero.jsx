import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh1f6ibkg.css';
import '../../css/a/ax8lognen.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yh1f6ibkg"/><path class="ax8lognen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yt-zero"} {...others} />);
}

export default Component;
