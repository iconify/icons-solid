import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfwz4o2w.css';
import '../../css/q/q2k_kgbqh.css';
import '../../css/v/voscasbpt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ezfwz4o2w"/><path class="q2k_kgbqh"/><path class="voscasbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:earth-layers-48-bold"} {...others} />);
}

export default Component;
