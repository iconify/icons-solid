import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c5rcp__tk.css';
import '../../css/h/h4dqlh8xc.css';
import '../../css/r/rg0hc6b4r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="c5rcp__tk"/><path class="h4dqlh8xc"/><path class="rg0hc6b4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:folder-contact"} {...others} />);
}

export default Component;
