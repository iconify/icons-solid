import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/p53aibb7y.css';
import '../../css/i/isx_m27xg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="p53aibb7y"/><path class="isx_m27xg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:log-out"} {...others} />);
}

export default Component;
