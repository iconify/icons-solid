import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkwqbs4aq.css';
import '../../css/b/bmaufsk4c.css';
import '../../css/q/qhryiubzj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pkwqbs4aq"/><path class="bmaufsk4c"/><path class="qhryiubzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:filter-x-48"} {...others} />);
}

export default Component;
