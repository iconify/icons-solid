import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/ggfpxfbjq.css';
import '../../css/z/z9hbohb-l.css';
import '../../css/l/l8h6qcbaz.css';
import '../../css/j/j7wmfrb_j.css';
import '../../css/f/fkt5p9b6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ggfpxfbjq wm-shadow"/><path class="wm-shadow z9hbohb-l"/><path class="l8h6qcbaz"/><path class="j7wmfrb_j"/><path class="fkt5p9b6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:snow-globe"} {...others} />);
}

export default Component;
