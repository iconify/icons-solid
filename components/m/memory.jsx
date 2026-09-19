import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bacfu3bgr.css';
import '../../css/z/zhfv58bgw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bacfu3bgr"/><path class="zhfv58bgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:memory"} {...others} />);
}

export default Component;
