import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l8912v45a.css';
import '../../css/v/vjnhz7bwb.css';
import '../../css/q/qbsx6nwvy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="l8912v45a"/><path class="vjnhz7bwb"/><path class="qbsx6nwvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:applet-closed"} {...others} />);
}

export default Component;
