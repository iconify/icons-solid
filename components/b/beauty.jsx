import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pcls6pban.css';
import '../../css/c/ccfx3ebrc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="pcls6pban"/><path class="ccfx3ebrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:beauty"} {...others} />);
}

export default Component;
