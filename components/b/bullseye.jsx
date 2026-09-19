import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0n9ejb6w.css';
import '../../css/z/z824g7a8m.css';
import '../../css/o/o751h38_q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="o0n9ejb6w"/><path class="z824g7a8m"/><path class="o751h38_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:bullseye"} {...others} />);
}

export default Component;
