import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/ugtadac3z.css';
import '../../css/j/jexbt1sfc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ugtadac3z"/><path class="jexbt1sfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:chip"} {...others} />);
}

export default Component;
