import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j04-771gm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j04-771gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:timeline-event-plus"} {...others} />);
}

export default Component;
