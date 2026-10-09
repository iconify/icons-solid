import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kccn7xs5a.css';
import '../../css/f/fbsv3bchb.css';
import '../../css/k/k0x9cnbfj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kccn7xs5a"/><path class="fbsv3bchb"/><path class="k0x9cnbfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ferris-wheel-48-bold"} {...others} />);
}

export default Component;
