import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x16rdgb4k.css';
import '../../css/s/s_9jp5bhq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x16rdgb4k"/><path class="s_9jp5bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-locked"} {...others} />);
}

export default Component;
