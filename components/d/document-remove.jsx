import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nqy4sg-vs.css';
import '../../css/b/b-hozbcci.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="nqy4sg-vs"/><path class="b-hozbcci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-remove"} {...others} />);
}

export default Component;
