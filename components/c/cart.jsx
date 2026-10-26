import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/ngeexsbgt.css';
import '../../css/p/pr5m-s0ev.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ngeexsbgt"/><path class="pr5m-s0ev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:cart"} {...others} />);
}

export default Component;
