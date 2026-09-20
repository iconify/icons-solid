import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/e/e24c1ctgv.css';
import '../../css/l/l24ix9b2g.css';
import '../../css/y/yeh79u91e.css';
import '../../css/p/puf7eebqh.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="e24c1ctgv"/><path clip-rule="evenodd" class="l24ix9b2g"/></g><path clip-rule="evenodd" class="yeh79u91e"/><path clip-rule="evenodd" class="puf7eebqh"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:water-drop-off"} {...others} />);
}

export default Component;
