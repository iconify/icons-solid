import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpel3hezc.css';
import '../../css/a/abemn0b1q.css';
import '../../css/z/zfdgkmbxx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpel3hezc"/><path class="abemn0b1q"/><path class="zfdgkmbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:merit-order-48-bold"} {...others} />);
}

export default Component;
