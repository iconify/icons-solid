import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy-u7bcsp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uy-u7bcsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:happy-skull"} {...others} />);
}

export default Component;
