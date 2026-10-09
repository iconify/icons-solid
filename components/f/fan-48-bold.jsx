import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl4xncchh.css';
import '../../css/q/qbfpednqz.css';
import '../../css/q/qewmfcczo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rl4xncchh"/><path class="qbfpednqz"/><path class="qewmfcczo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fan-48-bold"} {...others} />);
}

export default Component;
