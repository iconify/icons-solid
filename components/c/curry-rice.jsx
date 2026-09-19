import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1tvrvbwj.css';
import '../../css/g/gjrpracpq.css';
import '../../css/n/nnt7-9b5p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b1tvrvbwj"/><path class="gjrpracpq"/><path class="nnt7-9b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:curry-rice"} {...others} />);
}

export default Component;
