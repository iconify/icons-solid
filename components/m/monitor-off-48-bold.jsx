import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8d66nlfs.css';
import '../../css/p/phox42bnd.css';
import '../../css/r/rmb7iccqj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j8d66nlfs"/><path class="phox42bnd"/><path class="rmb7iccqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-off-48-bold"} {...others} />);
}

export default Component;
