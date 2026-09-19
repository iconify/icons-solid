import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hd3h48bql.css';
import '../../css/o/ox2i85b0q.css';
import '../../css/v/ve208qbsr.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hd3h48bql"/><path class="ox2i85b0q"/><path clip-rule="evenodd" class="ve208qbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:credit-card"} {...others} />);
}

export default Component;
