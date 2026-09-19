import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jkte7ebxp.css';
import '../../css/r/rt809ylhh.css';
import '../../css/x/x2dwaybup.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="jkte7ebxp"/><path class="rt809ylhh"/><path class="x2dwaybup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:map-marker-line-duo"} {...others} />);
}

export default Component;
