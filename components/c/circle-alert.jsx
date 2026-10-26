import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/n6lj9wybl.css';
import '../../css/e/ex2xbl5gk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="n6lj9wybl"/><path class="ex2xbl5gk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:circle-alert"} {...others} />);
}

export default Component;
