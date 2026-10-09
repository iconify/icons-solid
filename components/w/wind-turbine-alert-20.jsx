import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uccg79b_y.css';
import '../../css/j/jf-zp2p0m.css';
import '../../css/x/x6rb1_bom.css';
import '../../css/u/uw-55pedx.css';
import '../../css/r/r__jq3blf.css';
import '../../css/s/s9o2plion.css';
import '../../css/d/dqgervd7r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uccg79b_y"/><path class="jf-zp2p0m"/><path class="x6rb1_bom"/><path class="uw-55pedx"/><path class="r__jq3blf"/><path class="s9o2plion"/><path class="dqgervd7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-alert-20"} {...others} />);
}

export default Component;
