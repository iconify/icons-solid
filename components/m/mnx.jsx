import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/je_xtacvy.css';
import '../../css/l/lleh27b6p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="je_xtacvy"/><path class="lleh27b6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:mnx"} {...others} />);
}

export default Component;
