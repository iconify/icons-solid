import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/iixc72byc.css';
import '../../css/k/kzhs7u93y.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="iixc72byc"/><path class="kzhs7u93y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:user-add"} {...others} />);
}

export default Component;
