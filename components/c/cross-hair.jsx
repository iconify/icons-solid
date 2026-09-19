import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bl_1urbwu.css';
import '../../css/h/h5-7nhb8d.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="bl_1urbwu"/><path class="h5-7nhb8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cross-hair"} {...others} />);
}

export default Component;
