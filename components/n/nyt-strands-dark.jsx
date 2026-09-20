import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcgo1w6kb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lcgo1w6kb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-strands-dark"} {...others} />);
}

export default Component;
