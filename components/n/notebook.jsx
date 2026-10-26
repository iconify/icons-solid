import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/f/fv5bnjbyf.css';
import '../../css/h/hh0r44boe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="fv5bnjbyf"/><path class="hh0r44boe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:notebook"} {...others} />);
}

export default Component;
