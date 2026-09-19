import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tb__dlbxe.css';
import '../../css/z/zrbkog8eg.css';
import '../../css/h/hzvkpy4xn.css';
import '../../css/l/lqt7szbcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="tb__dlbxe"/><path class="zrbkog8eg"/><path class="hzvkpy4xn"/><path class="lqt7szbcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:birthday-cake"} {...others} />);
}

export default Component;
