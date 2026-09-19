import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efcdni89n.css';
import '../../css/c/c7x9-qbgv.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="efcdni89n"/><path clip-rule="evenodd" class="c7x9-qbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:tool-print"} {...others} />);
}

export default Component;
