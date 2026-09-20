import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hlow8tbhl.css';
import '../../css/b/b2z-3ibpy.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="hlow8tbhl"/><path class="b2z-3ibpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:trash-alt"} {...others} />);
}

export default Component;
