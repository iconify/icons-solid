import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c65boqqfl.css';
import '../../css/q/qfyufmblv.css';
import '../../css/j/jdokwnbqk.css';
import '../../css/r/ro7gmvb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c65boqqfl"/><path class="qfyufmblv wm-shadow"/><path class="jdokwnbqk"/><path class="ro7gmvb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:school-engrave"} {...others} />);
}

export default Component;
