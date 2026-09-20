import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpozfvbdr.css';
import '../../css/u/ujuawnn9n.css';
import '../../css/u/u2rgg0x2m.css';
import '../../css/w/w3nyc3bir.css';
import '../../css/e/eznx6xagx.css';
import '../../css/q/q7s_mj7_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kpozfvbdr"/><path class="ujuawnn9n"/><path class="u2rgg0x2m"/><path class="w3nyc3bir"/><path class="eznx6xagx"/><path class="q7s_mj7_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-bold-duotone"} {...others} />);
}

export default Component;
