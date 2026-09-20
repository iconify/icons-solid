import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq7b6qb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cq7b6qb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:slash-octagon"} {...others} />);
}

export default Component;
