import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2_t7m8jd.css';
import '../../css/b/bnd5rrb4j.css';
import '../../css/g/gww8o9bvp.css';
import '../../css/j/jekto8b8v.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="c2_t7m8jd"><path class="bnd5rrb4j"/><path class="gww8o9bvp"/><path class="jekto8b8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dawarich"} {...others} />);
}

export default Component;
