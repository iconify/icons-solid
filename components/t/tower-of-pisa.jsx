import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/o/ow5qbpbcb.css';
import '../../css/g/gqb1fl3dq.css';
import '../../css/d/dxinpj-9x.css';
import '../../css/h/hbnyk8tod.css';
import '../../css/s/sm9jz4bsm.css';
import '../../css/l/looh5iwje.css';
import '../../css/e/ep3g5qb4i.css';
import '../../css/e/e9ud9bccr.css';
import '../../css/a/a8w-71r1b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ow5qbpbcb"/><path class="gqb1fl3dq"/><path class="dxinpj-9x"/><path class="hbnyk8tod"/><path class="sm9jz4bsm"/><path class="looh5iwje"/><path class="ep3g5qb4i"/><rect transform="rotate(15 25.183 4.387)" class="e9ud9bccr"/><path class="a8w-71r1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tower-of-pisa"} {...others} />);
}

export default Component;
