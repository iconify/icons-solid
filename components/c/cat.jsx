import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uvcaqmbth.css';
import '../../css/g/g4g9h7_im.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="uvcaqmbth"/><path class="g4g9h7_im"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:cat"} {...others} />);
}

export default Component;
