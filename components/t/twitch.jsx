import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9uu9lbnd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r9uu9lbnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:twitch"} {...others} />);
}

export default Component;
