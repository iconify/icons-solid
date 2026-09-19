import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij883nb6j.css';
import '../../css/u/uuwu6z9id.css';
import '../../css/u/u90b6tbsy.css';
import '../../css/x/x09oa7cct.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ij883nb6j"/><path class="uuwu6z9id"/><path class="u90b6tbsy"/><path class="x09oa7cct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-oceania-duo"} {...others} />);
}

export default Component;
