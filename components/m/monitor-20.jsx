import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1uql4bun.css';
import '../../css/s/s4qd1rblb.css';
import '../../css/a/a19dqulkp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p1uql4bun"/><path class="s4qd1rblb"/><path class="a19dqulkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-20"} {...others} />);
}

export default Component;
