import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bfqe9pj_b.css';
import '../../css/t/t2_mp8bco.css';
import '../../css/y/y4xsqtbff.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="bfqe9pj_b"/><path class="t2_mp8bco"/><path class="y4xsqtbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-warning"} {...others} />);
}

export default Component;
