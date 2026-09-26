import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qmt49hbjl.css';
import '../../css/q/qv3eynb2i.css';
import '../../css/m/msbfvkbhy.css';
import '../../css/i/iux0t_bqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="qmt49hbjl"/><path class="qv3eynb2i"/></g><path class="msbfvkbhy"/><path class="iux0t_bqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-down-up-bold-duotone"} {...others} />);
}

export default Component;
