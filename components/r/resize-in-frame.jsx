import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cjsa-2bpy.css';
import '../../css/d/d-ncrxbbo.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="cjsa-2bpy"/><path class="d-ncrxbbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:resize-in-frame"} {...others} />);
}

export default Component;
