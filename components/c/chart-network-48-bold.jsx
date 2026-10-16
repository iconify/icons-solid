import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhp5-v54c.css';
import '../../css/k/ku-g4jbts.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zhp5-v54c"/><path class="ku-g4jbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-network-48-bold"} {...others} />);
}

export default Component;
