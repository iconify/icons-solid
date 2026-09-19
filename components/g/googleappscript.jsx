import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xte2y8b6s.css';
import '../../css/y/ygqhxjblw.css';
import '../../css/s/stpu0nbcx.css';
import '../../css/o/ob2lfwuos.css';
import '../../css/z/zu7l1lbjf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xte2y8b6s"/><path class="ygqhxjblw"/><path class="stpu0nbcx"/><path class="ob2lfwuos"/><path class="zu7l1lbjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:googleappscript"} {...others} />);
}

export default Component;
