import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yhv5abczy.css';
import '../../css/r/rppt24xri.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="yhv5abczy"/><path class="rppt24xri"/><path class="dno4_nblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cast-sharp-duotone"} {...others} />);
}

export default Component;
