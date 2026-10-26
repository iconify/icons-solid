import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/iiabrvj1h.css';
import '../../css/o/o0sd3mb7s.css';
import '../../css/x/xezu5da1x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="iiabrvj1h"/><path class="o0sd3mb7s"/><path class="xezu5da1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:rose"} {...others} />);
}

export default Component;
