import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srpjfu9ek.css';
import '../../css/f/f1fczmbyr.css';
import '../../css/g/g6145_v8p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="srpjfu9ek"/><path class="f1fczmbyr"/><path class="g6145_v8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dumbbell-20"} {...others} />);
}

export default Component;
