import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-pq4_buo.css';
import '../../css/h/h4y7j5ljz.css';
import '../../css/b/bt58twbca.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="s-pq4_buo"/><path class="h4y7j5ljz"/><path class="bt58twbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:japanese-acceptable-button"} {...others} />);
}

export default Component;
