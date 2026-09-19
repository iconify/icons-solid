import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j65d55bdx.css';
import '../../css/e/ebk4kbb8v.css';
import '../../css/a/aamyo7pvu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="j65d55bdx"/><path class="ebk4kbb8v"/><path class="aamyo7pvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-line-start-bold"} {...others} />);
}

export default Component;
