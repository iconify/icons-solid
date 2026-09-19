import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhj7_6cck.css';
import '../../css/d/dc9hw5g_e.css';
import '../../css/c/c9digbcde.css';
import '../../css/x/xajsqxb-e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hhj7_6cck"/><path class="dc9hw5g_e"/><path class="c9digbcde"/><path class="xajsqxb-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:stacked-scrolling-2"} {...others} />);
}

export default Component;
