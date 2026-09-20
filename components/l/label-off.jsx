import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/y/yv_ddbm3i.css';
import '../../css/l/lk771nbmv.css';
import '../../css/f/f1dvenbne.css';
import '../../css/e/earle6b1m.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="yv_ddbm3i"/><path clip-rule="evenodd" class="lk771nbmv"/></g><path clip-rule="evenodd" class="f1dvenbne"/><path clip-rule="evenodd" class="earle6b1m"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:label-off"} {...others} />);
}

export default Component;
