import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vmk_vtb5n.css';
import '../../css/e/ec_wccc-m.css';
import '../../css/w/wspk5dbcq.css';
import '../../css/f/ffa_si-tf.css';
import '../../css/i/itxj_4b5i.css';
import '../../css/f/fa0vqcbgx.css';
import '../../css/u/uil_3kbve.css';
import '../../css/u/upc99bblc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vmk_vtb5n"/><path class="ec_wccc-m"/><path class="wspk5dbcq"/><path class="ffa_si-tf"/><path class="itxj_4b5i"/><path class="fa0vqcbgx"/><path class="uil_3kbve"/><path class="upc99bblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-clap"} {...others} />);
}

export default Component;
