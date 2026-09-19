import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a8vt4kbxp.css';
import '../../css/c/cxoqg3pds.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="a8vt4kbxp"/><path class="cxoqg3pds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:basket-remove"} {...others} />);
}

export default Component;
