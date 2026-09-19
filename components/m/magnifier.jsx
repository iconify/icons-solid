import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l2y8knb6g.css';
import '../../css/o/obcwc6b8h.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="l2y8knb6g"/><path class="obcwc6b8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:magnifier"} {...others} />);
}

export default Component;
