import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f0xzn9s8p.css';
import '../../css/l/lwa595gfu.css';
import '../../css/s/sbp9wqb1w.css';
import '../../css/f/ftqvo73xc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="f0xzn9s8p"/><path class="lwa595gfu"/><path class="sbp9wqb1w"/><path clip-rule="evenodd" class="ftqvo73xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-teacher"} {...others} />);
}

export default Component;
