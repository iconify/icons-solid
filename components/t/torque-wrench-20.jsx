import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsd0dqg8h.css';
import '../../css/f/fj0-3lbac.css';
import '../../css/f/f0-68acbf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wsd0dqg8h"/><path class="fj0-3lbac"/><path class="f0-68acbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:torque-wrench-20"} {...others} />);
}

export default Component;
