import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/s/smcouc45j.css';
import '../../css/y/y_7n8kb8j.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="smcouc45j"/><path class="y_7n8kb8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:chain"} {...others} />);
}

export default Component;
