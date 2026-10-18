import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om_2m0e4d.css';
import '../../css/z/zhkqvsbwg.css';
import '../../css/a/axb1k_ble.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="om_2m0e4d"/><path class="zhkqvsbwg"/><path class="axb1k_ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-monitoring-48-bold"} {...others} />);
}

export default Component;
