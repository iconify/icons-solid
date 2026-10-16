import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5l2hstxs.css';
import '../../css/y/yub7c6b0d.css';
import '../../css/g/g6wu-497r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q5l2hstxs"/><path class="yub7c6b0d"/><path class="g6wu-497r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:earth-layers-20"} {...others} />);
}

export default Component;
