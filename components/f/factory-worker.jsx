import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eejtv1vkx.css';
import '../../css/m/m6_vombxc.css';
import '../../css/l/lancknb1t.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="eejtv1vkx"/><path class="m6_vombxc"/><path class="lancknb1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:factory-worker"} {...others} />);
}

export default Component;
