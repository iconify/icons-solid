import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4-e_9bsl.css';
import '../../css/k/kwk21pb9m.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qzk5zubqx.css';
import '../../css/f/fujosbckp.css';
import '../../css/k/k_arrub8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u4-e_9bsl"/><path clip-rule="evenodd" class="kwk21pb9m"/><g class="mc2zb0bvp"><path class="qzk5zubqx"/><path class="fujosbckp"/><path class="k_arrub8k"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-bold-duotone"} {...others} />);
}

export default Component;
