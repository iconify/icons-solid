import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrvslrbcn.css';
import '../../css/t/t1ta_fbcc.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qrvslrbcn"/><path class="t1ta_fbcc"/><path class="c65-ehvfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chemical-plant-48"} {...others} />);
}

export default Component;
