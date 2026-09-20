import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_7am4v1j.css';
import '../../css/l/lf2w2_ggq.css';
import '../../css/u/u7r_hlblr.css';
import '../../css/m/m_wcssqbj.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/y/yw3h64ztw.css';
import '../../css/p/poho39rrt.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="h_7am4v1j"><path class="lf2w2_ggq"/><path class="u7r_hlblr"/><path class="m_wcssqbj"/></g><g class="jn8qy4bru"><path class="yw3h64ztw"/><path class="poho39rrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spade"} {...others} />);
}

export default Component;
