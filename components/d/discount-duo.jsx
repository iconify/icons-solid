import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8yxl582h.css';
import '../../css/r/rvcv5yw0j.css';
import '../../css/t/tzdbdn7ho.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="r8yxl582h"/><path class="rvcv5yw0j"/><path class="tzdbdn7ho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:discount-duo"} {...others} />);
}

export default Component;
