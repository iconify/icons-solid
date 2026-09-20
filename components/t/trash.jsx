import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qh7mljbyv.css';
import '../../css/e/ed3mcy8qt.css';
import '../../css/x/x3ybkcknw.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="qh7mljbyv"/><path class="ed3mcy8qt"/><path clip-rule="evenodd" class="x3ybkcknw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:trash"} {...others} />);
}

export default Component;
