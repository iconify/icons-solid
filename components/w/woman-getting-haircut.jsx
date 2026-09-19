import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/ve9ho6b4a.css';
import '../../css/f/frx8fibsc.css';
import '../../css/m/mxt2q1bfv.css';
import '../../css/p/ppqbi6bum.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ve9ho6b4a"/><path class="frx8fibsc"/><path class="mxt2q1bfv"/><path class="ppqbi6bum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-getting-haircut"} {...others} />);
}

export default Component;
