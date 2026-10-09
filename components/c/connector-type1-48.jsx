import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg-biwbzh.css';
import '../../css/n/nrf_j2jrh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xg-biwbzh"/><path class="nrf_j2jrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-type1-48"} {...others} />);
}

export default Component;
