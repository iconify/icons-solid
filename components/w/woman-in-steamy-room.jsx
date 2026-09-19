import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kn-606c3s.css';
import '../../css/k/kvzkehbps.css';
import '../../css/a/a6tunsbtf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kn-606c3s"/><path class="kvzkehbps"/><path class="a6tunsbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-in-steamy-room"} {...others} />);
}

export default Component;
