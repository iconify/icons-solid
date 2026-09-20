import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/s/slhpvxi1k.css';
import '../../css/z/zhqi2nbfd.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="slhpvxi1k"/><path class="zhqi2nbfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:enter"} {...others} />);
}

export default Component;
