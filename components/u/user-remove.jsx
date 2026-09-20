import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/r/rtktb5b_a.css';
import '../../css/k/kzhs7u93y.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="rtktb5b_a"/><path class="kzhs7u93y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:user-remove"} {...others} />);
}

export default Component;
