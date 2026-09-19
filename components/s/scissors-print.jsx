import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g178b1wlz.css';
import '../../css/l/ld5zuhbyx.css';
import '../../css/s/sej-8-beb.css';
import '../../css/m/ma220ub_p.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g178b1wlz"/><path clip-rule="evenodd" class="ld5zuhbyx"/><path class="sej-8-beb"/><path class="ma220ub_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:scissors-print"} {...others} />);
}

export default Component;
