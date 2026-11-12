import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isigbcz0e.css';
import '../../css/i/ix46jsv4a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="isigbcz0e"/><path class="ix46jsv4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:synclyrics-light"} {...others} />);
}

export default Component;
