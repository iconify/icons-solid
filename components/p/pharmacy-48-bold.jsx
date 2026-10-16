import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d95ayjqct.css';
import '../../css/g/g_ub4abnv.css';
import '../../css/x/xa69_er8e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d95ayjqct"/><path class="g_ub4abnv"/><path class="xa69_er8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pharmacy-48-bold"} {...others} />);
}

export default Component;
