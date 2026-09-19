import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajkmzg0pj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ajkmzg0pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:mesh-ball"} {...others} />);
}

export default Component;
