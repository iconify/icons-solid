import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/h/hl4ferbya.css';
import '../../css/b/b8u8w9tdh.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="hl4ferbya"/><path class="b8u8w9tdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:diamond"} {...others} />);
}

export default Component;
