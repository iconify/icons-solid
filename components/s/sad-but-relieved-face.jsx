import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cstiu_bty.css';
import '../../css/t/t8dwkxw1q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="cstiu_bty"/><path class="t8dwkxw1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:sad-but-relieved-face"} {...others} />);
}

export default Component;
