import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b527d3b3t.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b527d3b3t"/><path class="x1mdp195q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:green-hexagon"} {...others} />);
}

export default Component;
