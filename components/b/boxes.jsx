import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k53jnabpt.css';
import '../../css/p/p71hx7bqi.css';
import '../../css/x/x1y1e-bhc.css';
import '../../css/q/qf8r2obsc.css';
import '../../css/n/nvacr7bsm.css';
import '../../css/a/arfz6xban.css';
import '../../css/l/lkslfbcvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="k53jnabpt"/><rect class="p71hx7bqi"/><rect class="x1y1e-bhc"/><rect class="qf8r2obsc"/><rect class="nvacr7bsm"/><rect class="arfz6xban"/><path class="lkslfbcvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:boxes"} {...others} />);
}

export default Component;
