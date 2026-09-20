import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/m/mbrj2bc1v.css';
import '../../css/g/giiskrsjx.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="mbrj2bc1v"/><path class="giiskrsjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:refresh"} {...others} />);
}

export default Component;
