import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7_w19b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7_w19b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:timeline-check-outline"} {...others} />);
}

export default Component;
