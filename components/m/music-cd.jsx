import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b08in11er.css';
import '../../css/z/zq9ep78uu.css';
import '../../css/i/im0mfzb0p.css';
import '../../css/j/jgfok7b9j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="b08in11er"/><path class="zq9ep78uu"/><path class="im0mfzb0p"/><path class="jgfok7b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:music-cd"} {...others} />);
}

export default Component;
