import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tjhoo-smz.css';
import '../../css/x/x8tj1zoty.css';
import '../../css/u/uy4_sob9g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="tjhoo-smz"/><path class="x8tj1zoty"/><path class="uy4_sob9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:voice-input"} {...others} />);
}

export default Component;
