import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t71xneb_n.css';
import '../../css/q/qbzs0sbjx.css';
import '../../css/d/d3rw2v6lb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t71xneb_n"/><path class="qbzs0sbjx"/><path clip-rule="evenodd" class="d3rw2v6lb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:travel-alt-outline"} {...others} />);
}

export default Component;
