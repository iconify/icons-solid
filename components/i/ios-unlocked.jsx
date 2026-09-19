import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_9jp5bhq.css';
import '../../css/y/yszbrkbna.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s_9jp5bhq"/><path class="yszbrkbna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-unlocked"} {...others} />);
}

export default Component;
