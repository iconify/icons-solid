import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7ghpebcu.css';
import '../../css/x/x59fuv1nw.css';
import '../../css/p/p-nzwk9jc.css';
import '../../css/g/gewiseacf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l7ghpebcu"/><path clip-rule="evenodd" class="x59fuv1nw"/><path clip-rule="evenodd" class="p-nzwk9jc"/><path clip-rule="evenodd" class="gewiseacf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-plus-outline"} {...others} />);
}

export default Component;
