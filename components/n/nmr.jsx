import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b08in11er.css';
import '../../css/g/g-rh-3b3g.css';
import '../../css/h/hh5f37fuo.css';
import '../../css/x/xsz_debyy.css';
import '../../css/m/mmbm_xbyy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="b08in11er"/><path class="g-rh-3b3g"/><path class="hh5f37fuo"/><path class="xsz_debyy"/><path class="mmbm_xbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:nmr"} {...others} />);
}

export default Component;
