import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b08in11er.css';
import '../../css/l/lmfu3lb6f.css';
import '../../css/a/aslefzbjn.css';
import '../../css/i/idblztryt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="b08in11er"/><path class="lmfu3lb6f"/><path class="aslefzbjn"/><path class="idblztryt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:world"} {...others} />);
}

export default Component;
