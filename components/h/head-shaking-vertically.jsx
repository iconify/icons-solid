import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gqmsfeblw.css';
import '../../css/c/czh7avbpl.css';
import '../../css/l/lv0a6gbpi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="gqmsfeblw"/><path class="czh7avbpl"/><path class="lv0a6gbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:head-shaking-vertically"} {...others} />);
}

export default Component;
