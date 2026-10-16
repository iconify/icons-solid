import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neu7wrbqd.css';
import '../../css/c/cero_9xdu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="neu7wrbqd"/><path class="cero_9xdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:meter-cabinet-48"} {...others} />);
}

export default Component;
