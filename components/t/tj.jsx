import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eb3ht5b1i.css';
import '../../css/k/kqpjpzzrl.css';
import '../../css/p/p18s_lo_x.css';
import '../../css/r/rqw2ufbbf.css';
import '../../css/x/xxf39yb4o.css';
import '../../css/r/rivul1b_c.css';
import '../../css/n/n1a9a-jis.css';
import '../../css/c/cqwgtobjz.css';
import '../../css/b/bhhqm2i8f.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="bi12bsetm"><path class="eb3ht5b1i"/><path class="kqpjpzzrl"/><path class="p18s_lo_x"/><path class="rqw2ufbbf"/><path class="xxf39yb4o"/><path class="rivul1b_c"/><path class="n1a9a-jis"/><path class="cqwgtobjz"/><path class="bhhqm2i8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tj"} {...others} />);
}

export default Component;
