import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kldbyvy5v.css';
import '../../css/k/kaj75h1kd.css';
import '../../css/u/ux63s-ozf.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kldbyvy5v"/><path class="kaj75h1kd"/><path class="ux63s-ozf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:checkmark-print"} {...others} />);
}

export default Component;
