import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/o/ofglf_bls.css';
import '../../css/n/nlm1rl9vu.css';
import '../../css/m/mk1236bqy.css';
import '../../css/m/mzs7sub3g.css';
import '../../css/o/oqrnd209j.css';
import '../../css/q/q_1fi-bxw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="ofglf_bls"/><path class="nlm1rl9vu"/><path class="mk1236bqy"/><path class="mzs7sub3g"/><path class="oqrnd209j"/><path class="q_1fi-bxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:circus"} {...others} />);
}

export default Component;
