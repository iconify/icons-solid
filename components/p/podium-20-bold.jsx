import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-6jetbog.css';
import '../../css/h/hbbf6bc_k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h-6jetbog"/><path class="hbbf6bc_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:podium-20-bold"} {...others} />);
}

export default Component;
