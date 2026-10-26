import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/a/ahs4p_tot.css';
import '../../css/m/myspsvvfh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ahs4p_tot"/><path class="myspsvvfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:redo"} {...others} />);
}

export default Component;
