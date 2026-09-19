import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b08in11er.css';
import '../../css/l/lsjkxobus.css';
import '../../css/c/cxxb6hb3f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="b08in11er"/><path class="lsjkxobus"/><path class="cxxb6hb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baseball"} {...others} />);
}

export default Component;
