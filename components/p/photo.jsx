import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k3b8__nse.css';
import '../../css/q/qi52z8b1r.css';
import '../../css/l/le_on8bgi.css';
import '../../css/p/pq_ghj_iw.css';
import '../../css/o/o28jzzbbk.css';
import '../../css/w/wpepxbatt.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k3b8__nse"/><path class="qi52z8b1r"/><path clip-rule="evenodd" class="le_on8bgi"/><path class="pq_ghj_iw"/><path clip-rule="evenodd" class="o28jzzbbk"/><path clip-rule="evenodd" class="wpepxbatt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:photo"} {...others} />);
}

export default Component;
