import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz30y8b3r.css';
import '../../css/u/ucqd8s_7s.css';
import '../../css/k/kc5_9-b5b.css';
import '../../css/l/l3vqhjbkq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dz30y8b3r"/><path class="ucqd8s_7s"/><path class="kc5_9-b5b"/><path class="l3vqhjbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ventilation-20"} {...others} />);
}

export default Component;
