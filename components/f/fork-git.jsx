import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/x/xirci526l.css';
import '../../css/t/taosqkbwj.css';
import '../../css/h/hm4yo6blt.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="xirci526l"/><path class="taosqkbwj"/><path class="hm4yo6blt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:fork-git"} {...others} />);
}

export default Component;
