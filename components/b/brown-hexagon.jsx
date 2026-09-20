import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnt4rgbuc.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xnt4rgbuc"/><path class="x1mdp195q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:brown-hexagon"} {...others} />);
}

export default Component;
