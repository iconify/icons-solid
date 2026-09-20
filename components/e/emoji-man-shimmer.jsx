import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq07mm04a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mq07mm04a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:emoji-man-shimmer"} {...others} />);
}

export default Component;
