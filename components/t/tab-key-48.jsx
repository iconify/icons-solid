import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5ttvzsqn.css';
import '../../css/c/cnq1mrb_c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t5ttvzsqn"/><path class="cnq1mrb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tab-key-48"} {...others} />);
}

export default Component;
