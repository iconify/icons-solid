import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tke-0za-g.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/hroj_xbvp.css';
import '../../css/q/qk-cax30a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tke-0za-g"/><g class="mc2zb0bvp"><path class="hroj_xbvp"/><path class="qk-cax30a"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-horizontal-bold-duotone"} {...others} />);
}

export default Component;
