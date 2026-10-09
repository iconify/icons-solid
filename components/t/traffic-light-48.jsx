import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc9t8fp5n.css';
import '../../css/n/nl5mucbfu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hc9t8fp5n"/><path class="nl5mucbfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:traffic-light-48"} {...others} />);
}

export default Component;
