import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tdf1si01h.css';
import '../../css/j/j9uy3eb7u.css';
import '../../css/f/fznq11bvs.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="tdf1si01h"/><path class="j9uy3eb7u"/><path class="fznq11bvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:disc-remove"} {...others} />);
}

export default Component;
