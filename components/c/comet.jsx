import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/g6ol-3g7o.css';
import '../../css/m/mvo2v-b6d.css';
import '../../css/x/x_vvd-buy.css';
import '../../css/s/s-zutcg8k.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="g6ol-3g7o"/><path clip-rule="evenodd" class="mvo2v-b6d"/></g><path clip-rule="evenodd" class="x_vvd-buy"/><path clip-rule="evenodd" class="s-zutcg8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:comet"} {...others} />);
}

export default Component;
