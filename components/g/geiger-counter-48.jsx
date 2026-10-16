import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syffbkb-v.css';
import '../../css/j/j04q1cb1h.css';
import '../../css/z/zkta6vbnt.css';
import '../../css/p/p4fg2sbvf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="syffbkb-v"/><path class="j04q1cb1h"/><path class="zkta6vbnt"/><path class="p4fg2sbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geiger-counter-48"} {...others} />);
}

export default Component;
