import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fuky73q9g.css';
import '../../css/l/lqq65fbvw.css';
import '../../css/z/zur4v2lvu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="fuky73q9g"/><path class="lqq65fbvw"/><path class="zur4v2lvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:keycap-duo"} {...others} />);
}

export default Component;
