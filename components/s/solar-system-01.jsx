import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/ksjkt6bmk.css';
import '../../css/p/p9vjoqtlo.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/v/vj_1li4id.css';
import '../../css/n/nst6t7b4t.css';
import '../../css/w/wbom373wg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ksjkt6bmk"/><circle class="p9vjoqtlo"/><circle class="xtsrmvj7o"/><circle class="vj_1li4id"/><path class="nst6t7b4t"/><path class="wbom373wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:solar-system-01"} {...others} />);
}

export default Component;
