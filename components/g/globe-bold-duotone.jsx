import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/as6_xp3_v.css';
import '../../css/m/mxvtch9hs.css';
import '../../css/e/ec91lg3uo.css';
import '../../css/c/c66wu4b9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="as6_xp3_v"/><path class="mxvtch9hs"/><path class="ec91lg3uo"/><path class="c66wu4b9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:globe-bold-duotone"} {...others} />);
}

export default Component;
