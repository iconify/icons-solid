import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/as6_xp3_v.css';
import '../../css/c/ciq1v2bio.css';
import '../../css/d/dup_gbchp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="as6_xp3_v"/><path class="ciq1v2bio"/><path clip-rule="evenodd" class="dup_gbchp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:globe2-duotone"} {...others} />);
}

export default Component;
