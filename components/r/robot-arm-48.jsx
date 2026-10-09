import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp589yb-g.css';
import '../../css/e/esg1j5bfl.css';
import '../../css/i/ixcfylb1s.css';
import '../../css/d/d8tx-pb_g.css';
import '../../css/q/qndg8fbip.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vp589yb-g"/><path class="esg1j5bfl"/><path class="ixcfylb1s"/><path class="d8tx-pb_g"/><path class="qndg8fbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:robot-arm-48"} {...others} />);
}

export default Component;
