import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-e1u6q-v.css';
import '../../css/y/ysk6l2evj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a-e1u6q-v"/><path class="ysk6l2evj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-inverter-off-48-bold"} {...others} />);
}

export default Component;
