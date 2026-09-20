import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/s9bxdrb3i.css';
import '../../css/r/rzmctbalc.css';
import '../../css/v/vfg5fisqu.css';
import '../../css/r/riqg6fbee.css';
import '../../css/l/l9c1yv-go.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="s9bxdrb3i"/><path class="rzmctbalc"/><path class="vfg5fisqu"/><path class="riqg6fbee"/><path class="l9c1yv-go"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:virus-antivirus"} {...others} />);
}

export default Component;
