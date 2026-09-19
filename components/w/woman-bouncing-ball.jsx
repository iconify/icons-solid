import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sb9p0zuts.css';
import '../../css/w/wzf5oj_tw.css';
import '../../css/o/ol6pbu0iu.css';
import '../../css/c/c5p98tqtu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="sb9p0zuts"/><path clip-rule="evenodd" class="wzf5oj_tw"/><path class="ol6pbu0iu"/><path class="c5p98tqtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-bouncing-ball"} {...others} />);
}

export default Component;
