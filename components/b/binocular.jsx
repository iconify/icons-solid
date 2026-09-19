import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p3pof8b_h.css';
import '../../css/o/onndheh7g.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="p3pof8b_h"/><path class="onndheh7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:binocular"} {...others} />);
}

export default Component;
