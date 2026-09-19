import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/av9hdnrpf.css';
import '../../css/y/yy9q5t54j.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="av9hdnrpf"/><path class="yy9q5t54j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:slide-show"} {...others} />);
}

export default Component;
