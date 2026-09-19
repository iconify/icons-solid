import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b08in11er.css';
import '../../css/v/v-h3_9bul.css';
import '../../css/e/e_f7_4bqj.css';
import '../../css/n/ncfsb48ka.css';
import '../../css/i/iaiylo83l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="b08in11er"/><path class="v-h3_9bul"/><path class="e_f7_4bqj"/><path class="ncfsb48ka"/><path class="iaiylo83l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:energy-socket"} {...others} />);
}

export default Component;
