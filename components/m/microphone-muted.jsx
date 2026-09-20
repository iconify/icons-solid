import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/y/yp1_0nhpl.css';
import '../../css/n/n6xln4bqy.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="yp1_0nhpl"/><path class="n6xln4bqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:microphone-muted"} {...others} />);
}

export default Component;
