import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpkq7mu7x.css';
import '../../css/y/yv842m9yr.css';
import '../../css/s/s_1xd9b8i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gpkq7mu7x"/><path class="yv842m9yr"/><path class="s_1xd9b8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scour-protection-20-bold"} {...others} />);
}

export default Component;
