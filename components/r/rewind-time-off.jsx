import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/y/y2swyzbrm.css';
import '../../css/d/dy_nrob8o.css';
import '../../css/t/tdkw8f3ni.css';
import '../../css/u/u284gkb5t.css';
import '../../css/y/yc75pwfpz.css';
import '../../css/o/ow516f1wh.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="y2swyzbrm"/><path clip-rule="evenodd" class="dy_nrob8o"/></g><path clip-rule="evenodd" class="tdkw8f3ni"/><path clip-rule="evenodd" class="u284gkb5t"/><path clip-rule="evenodd" class="yc75pwfpz"/><path clip-rule="evenodd" class="ow516f1wh"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:rewind-time-off"} {...others} />);
}

export default Component;
