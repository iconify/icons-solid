import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oa8uxcckh.css';
import '../../css/v/vy_dwwbew.css';
import '../../css/q/qlkb9wqjy.css';
import '../../css/o/olt2-ybec.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="oa8uxcckh"/><path class="vy_dwwbew"/><path class="qlkb9wqjy"/><path class="olt2-ybec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:smoke-duo"} {...others} />);
}

export default Component;
