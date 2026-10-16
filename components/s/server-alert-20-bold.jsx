import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5vx4lykm.css';
import '../../css/i/iwzjusbjd.css';
import '../../css/k/kapshj_5v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r5vx4lykm"/><path class="iwzjusbjd"/><path class="kapshj_5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:server-alert-20-bold"} {...others} />);
}

export default Component;
