import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3b3aw3dq.css';
import '../../css/w/wzf1vhbnp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j3b3aw3dq"/><path class="wzf1vhbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:environmental-impact-48"} {...others} />);
}

export default Component;
