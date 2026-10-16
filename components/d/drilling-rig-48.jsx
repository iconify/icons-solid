import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf4atacsq.css';
import '../../css/a/anx3tw60h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sf4atacsq"/><path class="anx3tw60h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drilling-rig-48"} {...others} />);
}

export default Component;
