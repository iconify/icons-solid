import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om_2m0e4d.css';
import '../../css/z/zhkqvsbwg.css';
import '../../css/l/lgzb8or1n.css';
import '../../css/k/k427p8b3d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="om_2m0e4d"/><path class="zhkqvsbwg"/><path class="lgzb8or1n"/><path class="k427p8b3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scada-48-bold"} {...others} />);
}

export default Component;
