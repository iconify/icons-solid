import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dezwopb-j.css';
import '../../css/o/om_axp74m.css';
import '../../css/r/rh4rc7bcm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dezwopb-j"/><path class="om_axp74m"/><path class="rh4rc7bcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-plus-48"} {...others} />);
}

export default Component;
