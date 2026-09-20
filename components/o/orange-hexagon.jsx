import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4rlq3n0s.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h4rlq3n0s"/><path class="x1mdp195q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:orange-hexagon"} {...others} />);
}

export default Component;
