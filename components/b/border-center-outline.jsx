import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j07ug2b2j.css';
import '../../css/b/be78hac3b.css';
import '../../css/q/q_8ldsbpo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j07ug2b2j"/><path class="be78hac3b"/><path clip-rule="evenodd" class="q_8ldsbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-center-outline"} {...others} />);
}

export default Component;
