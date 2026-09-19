import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yv3ck326i.css';
import '../../css/n/n585bbrpz.css';
import '../../css/n/ned9hhbmj.css';
import '../../css/t/tu9faqbes.css';
import '../../css/y/ycgtg3bex.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="yv3ck326i"/><path class="n585bbrpz"/><path class="ned9hhbmj"/><path clip-rule="evenodd" class="tu9faqbes"/><path class="ycgtg3bex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:hotel-1"} {...others} />);
}

export default Component;
