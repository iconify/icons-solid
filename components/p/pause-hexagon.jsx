import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pot-aq7pv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pot-aq7pv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:pause-hexagon"} {...others} />);
}

export default Component;
