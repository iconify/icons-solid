import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xezhn6bls.css';
import '../../css/o/oxb1cbk0h.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="xezhn6bls"/><path class="oxb1cbk0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-centroid"} {...others} />);
}

export default Component;
