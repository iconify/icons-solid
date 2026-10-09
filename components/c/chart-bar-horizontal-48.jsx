import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv2p86eoi.css';
import '../../css/i/ietxivbey.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tv2p86eoi"/><path class="ietxivbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-bar-horizontal-48"} {...others} />);
}

export default Component;
