import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vteracm-n.css';
import '../../css/p/pzopvfbeg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="vteracm-n"/><path class="pzopvfbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:screwdriver"} {...others} />);
}

export default Component;
