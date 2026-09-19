import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kt0pdrbqd.css';
import '../../css/o/olqkhccjx.css';
import '../../css/s/sw8xyffxa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="kt0pdrbqd"/><path class="olqkhccjx"/><rect class="sw8xyffxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shovel"} {...others} />);
}

export default Component;
