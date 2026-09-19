import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxcjldayw.css';
import '../../css/t/t6k56x1hj.css';
import '../../css/h/h-r9fel_s.css';
import '../../css/v/vc-3p0b7b.css';
import '../../css/w/ws3ws8b5e.css';
import '../../css/q/qs54mccos.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hxcjldayw"/><path class="t6k56x1hj"/><path clip-rule="evenodd" class="h-r9fel_s"/><path class="vc-3p0b7b"/><path clip-rule="evenodd" class="ws3ws8b5e"/><path class="qs54mccos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hand-holding-seedling-bold"} {...others} />);
}

export default Component;
