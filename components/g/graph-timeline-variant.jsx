import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy4j7ebwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wy4j7ebwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:graph-timeline-variant"} {...others} />);
}

export default Component;
