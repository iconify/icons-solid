import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/y/yqvkmow1r.css';
import '../../css/k/kfw3mq-ct.css';
import '../../css/z/zqtrx1b9w.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="yqvkmow1r"/><path class="kfw3mq-ct"/><path class="zqtrx1b9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:import"} {...others} />);
}

export default Component;
