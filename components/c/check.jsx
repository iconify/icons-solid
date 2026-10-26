import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/n6lj9wybl.css';
import '../../css/w/whena_bpt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="n6lj9wybl"/><path class="whena_bpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:check"} {...others} />);
}

export default Component;
