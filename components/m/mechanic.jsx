import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7zn_vbwr.css';
import '../../css/u/u-fy1obmq.css';
import '../../css/a/a7yxpnbqs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="j7zn_vbwr"/><path class="u-fy1obmq"/><path class="a7yxpnbqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:mechanic"} {...others} />);
}

export default Component;
