import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-zq19pwq.css';
import '../../css/q/q8y36zb8b.css';
import '../../css/f/fqw-m9rcd.css';
import '../../css/k/krc-b_b8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i-zq19pwq"/><path class="q8y36zb8b"/><path clip-rule="evenodd" class="fqw-m9rcd"/><path class="krc-b_b8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mask-happy-outline"} {...others} />);
}

export default Component;
