import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/x/xjgw82buf.css';
import '../../css/q/qkj0dtbpf.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="xjgw82buf"/><path class="qkj0dtbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:book-closed"} {...others} />);
}

export default Component;
