import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t5o9c9b-b.css';
import '../../css/o/oypktcckz.css';
import '../../css/u/u46x23bvr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="t5o9c9b-b"/><path class="oypktcckz"/><path class="u46x23bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:application-effect"} {...others} />);
}

export default Component;
