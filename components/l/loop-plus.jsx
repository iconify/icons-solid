import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9t3y3buj.css';
import '../../css/o/o8tzs_jpg.css';
import '../../css/r/ro1ygcb6e.css';
import '../../css/n/nivlo-u6p.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h9t3y3buj"/><path clip-rule="evenodd" class="o8tzs_jpg"/><path class="ro1ygcb6e"/><path class="nivlo-u6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:loop-plus"} {...others} />);
}

export default Component;
