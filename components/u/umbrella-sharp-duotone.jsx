import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zt3a3_bve.css';
import '../../css/w/wlttq6b8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="zt3a3_bve"/><path class="wlttq6b8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:umbrella-sharp-duotone"} {...others} />);
}

export default Component;
