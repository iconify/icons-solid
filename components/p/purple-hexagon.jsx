import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6h71cw6d.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h6h71cw6d"/><path class="x1mdp195q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:purple-hexagon"} {...others} />);
}

export default Component;
