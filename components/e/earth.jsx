import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b08in11er.css';
import '../../css/c/cnmqsablm.css';
import '../../css/k/kl59wqhyt.css';
import '../../css/p/p-2hm0tdh.css';
import '../../css/r/rpexc0bxz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path clip-rule="evenodd" class="b08in11er"/><path class="cnmqsablm"/><path clip-rule="evenodd" class="kl59wqhyt"/><path class="p-2hm0tdh"/><path class="rpexc0bxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:earth"} {...others} />);
}

export default Component;
