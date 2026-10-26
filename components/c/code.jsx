import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/a/ayp_1teqm.css';
import '../../css/s/s825sodaq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ayp_1teqm"/><path class="s825sodaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:code"} {...others} />);
}

export default Component;
