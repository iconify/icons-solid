import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-kg9o_7b.css';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kqc49xbvg.css';
import '../../css/a/atjk8mbde.css';
import '../../css/h/hsixsabso.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVGgMjaidbp" width="28" height="25" x="2" y="4" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="t-kg9o_7b"/></mask><g class="to-5kdesz"><path class="kqc49xbvg"/><g mask="url(#SVGgMjaidbp)" class="atjk8mbde"><path class="hsixsabso"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:orange-heart"} {...others} />);
}

export default Component;
