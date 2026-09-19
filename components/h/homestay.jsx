import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y7l-e3b5u.css';
import '../../css/d/dwlztqbtr.css';
import '../../css/m/mktuxtp_x.css';
import '../../css/e/elsw3q_nx.css';
import '../../css/y/ysvyamf1q.css';
import '../../css/v/vvpmhlbvs.css';
import '../../css/g/g6cchgb_w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y7l-e3b5u"/><path class="dwlztqbtr"/><path class="mktuxtp_x"/><path class="elsw3q_nx"/><path class="ysvyamf1q"/><path class="vvpmhlbvs"/><path class="g6cchgb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:homestay"} {...others} />);
}

export default Component;
