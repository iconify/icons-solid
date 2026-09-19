import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5ynor4cz.css';
import '../../css/h/h0pr25blg.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="i5ynor4cz"/><path clip-rule="evenodd" class="h0pr25blg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:square-print"} {...others} />);
}

export default Component;
