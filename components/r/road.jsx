import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xuinpacag.css';
import '../../css/b/bfs19dopd.css';
import '../../css/j/jxh2xkbqg.css';
import '../../css/j/jaiyo2drh.css';
import '../../css/n/nd1c97bsl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xuinpacag"/><path class="bfs19dopd"/><path class="jxh2xkbqg"/><path class="jaiyo2drh"/><path class="nd1c97bsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:road"} {...others} />);
}

export default Component;
