import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv46repqa.css';
import '../../css/r/ra5u6pzcj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kv46repqa"/><path class="ra5u6pzcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rocket-20-bold"} {...others} />);
}

export default Component;
