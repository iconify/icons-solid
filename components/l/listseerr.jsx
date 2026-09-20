import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh9ii3etk.css';
import '../../css/n/n8lt07bda.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rh9ii3etk"/><path class="n8lt07bda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:listseerr"} {...others} />);
}

export default Component;
