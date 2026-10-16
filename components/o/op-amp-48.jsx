import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhwncubtu.css';
import '../../css/m/mzeowwbud.css';
import '../../css/o/o78n4201q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bhwncubtu"/><path class="mzeowwbud"/><path class="o78n4201q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:op-amp-48"} {...others} />);
}

export default Component;
