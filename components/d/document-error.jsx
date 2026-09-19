import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gkwu9i_hd.css';
import '../../css/e/e629bhb9p.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="gkwu9i_hd"/><path class="e629bhb9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-error"} {...others} />);
}

export default Component;
