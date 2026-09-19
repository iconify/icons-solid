import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/my_15_b2j.css';
import '../../css/b/bdimdovgw.css';
import '../../css/l/lgl2rxbth.css';
import '../../css/y/yazlzye9u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="my_15_b2j"/><path class="bdimdovgw"/><path class="lgl2rxbth"/><path class="yazlzye9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:fog"} {...others} />);
}

export default Component;
