import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fugj-bc1n.css';
import '../../css/e/ek_vi_w9n.css';
import '../../css/u/ussqgxbky.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="fugj-bc1n"/><path class="ek_vi_w9n"/><path class="ussqgxbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-arrow-right"} {...others} />);
}

export default Component;
