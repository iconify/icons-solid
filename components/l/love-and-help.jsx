import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/t/t5lm5q0pz.css';
import '../../css/u/uk1hw4hsp.css';
import '../../css/a/aqj23kbhz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="t5lm5q0pz"/><path class="uk1hw4hsp"/><path class="aqj23kbhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:love-and-help"} {...others} />);
}

export default Component;
