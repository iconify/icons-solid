import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xd3bv1-hx.css';
import '../../css/r/rb37m9b_d.css';
import '../../css/b/b4-0nz5dw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="xd3bv1-hx"/><path class="rb37m9b_d"/><path class="b4-0nz5dw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cock-pot"} {...others} />);
}

export default Component;
