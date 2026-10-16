import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih1_q1b8g.css';
import '../../css/m/mllvz95kl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ih1_q1b8g"/><path class="mllvz95kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:and-gate-20"} {...others} />);
}

export default Component;
