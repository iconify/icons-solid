import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8vr-hogo.css';
import '../../css/q/q9yy-pido.css';
import '../../css/t/tcrlt0b1d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="s8vr-hogo"/><path class="q9yy-pido"/><path class="tcrlt0b1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:health-worker"} {...others} />);
}

export default Component;
