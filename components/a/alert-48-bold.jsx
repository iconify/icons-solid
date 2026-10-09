import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvr1cwbqh.css';
import '../../css/q/qfa9e5rcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rvr1cwbqh"/><path class="qfa9e5rcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alert-48-bold"} {...others} />);
}

export default Component;
