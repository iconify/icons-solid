import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fuqqubc1t.css';
import '../../css/b/b50o_nw1f.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="fuqqubc1t"/><path class="b50o_nw1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:upwards-arrow-with-loop"} {...others} />);
}

export default Component;
