import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd85o-qpc.css';
import '../../css/l/l4lrodbjn.css';
import '../../css/b/bn5sk2bex.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qd85o-qpc"/><path class="l4lrodbjn"/><path class="bn5sk2bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:igloo-48"} {...others} />);
}

export default Component;
