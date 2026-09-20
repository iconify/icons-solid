import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqf4o3-1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqf4o3-1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendar-check-2"} {...others} />);
}

export default Component;
