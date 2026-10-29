import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq0e74btg.css';
import '../../css/e/ep3bh665h.css';
import '../../css/g/g7515gbuj.css';
import '../../css/g/g_2dvu8sc.css';
import '../../css/n/nujmd6bnu.css';
import '../../css/c/cbde6bblg.css';
import '../../css/v/vk_gl64cg.css';
import '../../css/c/cm6_-lb9h.css';
import '../../css/v/v0yyezbpy.css';
import '../../css/n/nemc3bcei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow wq0e74btg"/><path class="ep3bh665h wm-shadow"/><path class="g7515gbuj"/><path class="g_2dvu8sc"/><path class="nujmd6bnu"/><path class="cbde6bblg"/><path class="vk_gl64cg"/><path class="cm6_-lb9h wm-shine"/><path class="v0yyezbpy wm-shine"/><path class="nemc3bcei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:italic"} {...others} />);
}

export default Component;
