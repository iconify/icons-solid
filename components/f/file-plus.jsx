import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/m/mnq2p-hlq.css';
import '../../css/j/jn3tix0cr.css';
import '../../css/d/d5mydcbjt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="mnq2p-hlq"/><path class="jn3tix0cr"/><path class="d5mydcbjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:file-plus"} {...others} />);
}

export default Component;
