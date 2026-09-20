import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/p/po7s7xiew.css';
import '../../css/x/x_j240wtm.css';
import '../../css/s/s39w8bbfl.css';
import '../../css/s/s89fw3bsp.css';
import '../../css/v/v9xaop3ti.css';
import '../../css/c/c9-3mdtjk.css';
import '../../css/t/tffy9ff4c.css';
import '../../css/e/e9q_f1bos.css';
import '../../css/s/s6989_9xa.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="po7s7xiew"/><path class="x_j240wtm"/><path clip-rule="evenodd" class="s39w8bbfl"/><path class="s89fw3bsp"/><path clip-rule="evenodd" class="v9xaop3ti"/><path clip-rule="evenodd" class="c9-3mdtjk"/></g><path clip-rule="evenodd" class="tffy9ff4c"/><path clip-rule="evenodd" class="e9q_f1bos"/><path clip-rule="evenodd" class="s6989_9xa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:studio-light-side"} {...others} />);
}

export default Component;
