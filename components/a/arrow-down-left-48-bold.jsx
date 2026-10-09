import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbj7ts9zy.css';
import '../../css/s/sq_wf5bty.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rbj7ts9zy"/><path class="sq_wf5bty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-left-48-bold"} {...others} />);
}

export default Component;
