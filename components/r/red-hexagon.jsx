import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekf1wvb-d.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ekf1wvb-d"/><path class="x1mdp195q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:red-hexagon"} {...others} />);
}

export default Component;
