import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pplgiixce.css';
import '../../css/o/o_-ban--e.css';
import '../../css/n/n8hn-8rqz.css';
import '../../css/e/e47zzhb4p.css';
import '../../css/u/ugqmr4boh.css';
import '../../css/u/uv_rxpb9f.css';
import '../../css/z/zmx-evbsz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="pplgiixce"/><path class="o_-ban--e"/><path class="n8hn-8rqz"/><path class="e47zzhb4p"/><path class="ugqmr4boh"/><path class="uv_rxpb9f"/><path class="zmx-evbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:recycling-pool"} {...others} />);
}

export default Component;
