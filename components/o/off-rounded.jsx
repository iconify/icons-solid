import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qpm_gor2e.css';
import '../../css/w/wbcy2_xwm.css';
import '../../css/y/yo620yv7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qpm_gor2e"/><path class="wbcy2_xwm"/><path class="yo620yv7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:off-rounded"} {...others} />);
}

export default Component;
