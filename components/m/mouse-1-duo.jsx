import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnqb1u6-m.css';
import '../../css/w/w9l4spy6n.css';
import '../../css/e/eyibm5bwe.css';
import '../../css/u/uj50chxyr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rnqb1u6-m"/><path class="w9l4spy6n"/><path class="eyibm5bwe"/><path class="uj50chxyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mouse-1-duo"} {...others} />);
}

export default Component;
