import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl5eyibfe.css';
import '../../css/y/y7rl90rrd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nl5eyibfe"/><path class="y7rl90rrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cake-48"} {...others} />);
}

export default Component;
