import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1t2ripgj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r1t2ripgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:twitch-outline"} {...others} />);
}

export default Component;
