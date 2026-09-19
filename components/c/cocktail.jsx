import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jfou2ac_g.css';
import '../../css/c/c_civ1_3w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="jfou2ac_g"/><path class="c_civ1_3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cocktail"} {...others} />);
}

export default Component;
