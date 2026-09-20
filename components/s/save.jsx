import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f00izgbny.css';
import '../../css/o/oclqsc5cj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="f00izgbny"/><path class="oclqsc5cj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:save"} {...others} />);
}

export default Component;
