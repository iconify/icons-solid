import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/c/cqyq4mlhs.css';
import '../../css/r/rhi7qpbko.css';
import '../../css/r/rj_u9lbil.css';
import '../../css/q/qrodqjb4o.css';
import '../../css/y/y_d3_dbln.css';
import '../../css/t/ttseslbft.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="cqyq4mlhs"/><path class="rhi7qpbko"/><path class="rj_u9lbil"/></g><path clip-rule="evenodd" class="qrodqjb4o"/><path clip-rule="evenodd" class="y_d3_dbln"/><path clip-rule="evenodd" class="ttseslbft"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-up-off"} {...others} />);
}

export default Component;
