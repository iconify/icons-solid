import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qm58-9bfw.css';
import '../../css/i/ir-353l_x.css';
import '../../css/t/tqxa8acsn.css';
import '../../css/x/xoa4qi0vs.css';
import '../../css/l/lni93acqd.css';
import '../../css/k/keerg4bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qm58-9bfw"/><path class="ir-353l_x"/><path class="tqxa8acsn"/><path class="xoa4qi0vs"/><path class="lni93acqd"/><path class="keerg4bbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brain-cog-duotone"} {...others} />);
}

export default Component;
