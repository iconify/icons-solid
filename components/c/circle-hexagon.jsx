import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4yh9sqql.css';
import '../../css/a/aps6ewwol.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b x4yh9sqql"/><path class="aps6ewwol b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:circle-hexagon"} {...others} />);
}

export default Component;
