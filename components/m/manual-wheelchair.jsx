import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/krmxqc3ob.css';
import '../../css/t/twuq9qb0s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="krmxqc3ob"/><path class="twuq9qb0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:manual-wheelchair"} {...others} />);
}

export default Component;
