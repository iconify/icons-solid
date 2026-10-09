import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veb-t1e3e.css';
import '../../css/r/rlbc0qbau.css';
import '../../css/q/qhozfjjix.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="veb-t1e3e"/><path class="rlbc0qbau"/><path class="qhozfjjix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-flow-20-bold"} {...others} />);
}

export default Component;
