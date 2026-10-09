import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acc9x56xd.css';
import '../../css/q/qj8k73bxl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="acc9x56xd"/><path class="qj8k73bxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gallery-48"} {...others} />);
}

export default Component;
