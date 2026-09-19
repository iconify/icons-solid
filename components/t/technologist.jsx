import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5_k1tbqx.css';
import '../../css/t/t36gbiaeh.css';
import '../../css/u/un1nr9hnz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="p5_k1tbqx"/><path class="t36gbiaeh"/><path class="un1nr9hnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:technologist"} {...others} />);
}

export default Component;
