import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a58d-47ev.css';
import '../../css/l/lcntl7int.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="a58d-47ev"/><path clip-rule="evenodd" class="lcntl7int"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:electricity-print"} {...others} />);
}

export default Component;
