import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/b08in11er.css';
import '../../css/f/fywbebbso.css';
import '../../css/u/uptdqswhc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="b08in11er"/><path class="fywbebbso"/><path class="uptdqswhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:multi-circular"} {...others} />);
}

export default Component;
