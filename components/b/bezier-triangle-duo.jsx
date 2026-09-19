import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5mqf-brr.css';
import '../../css/b/bb2k93bxr.css';
import '../../css/e/ey2r4hb-j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="o5mqf-brr"/><path class="bb2k93bxr"/><path class="ey2r4hb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bezier-triangle-duo"} {...others} />);
}

export default Component;
