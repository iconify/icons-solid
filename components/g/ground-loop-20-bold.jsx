import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4lhl3b6q.css';
import '../../css/l/lfzfbp_8d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q4lhl3b6q"/><path class="lfzfbp_8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-loop-20-bold"} {...others} />);
}

export default Component;
