import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bp-skte0x.css';
import '../../css/w/w315tgbyz.css';
import '../../css/k/kb36qtbpx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="bp-skte0x"/><path class="w315tgbyz"/><path class="kb36qtbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:bookmark-tabs"} {...others} />);
}

export default Component;
