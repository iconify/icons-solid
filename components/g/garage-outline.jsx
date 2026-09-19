import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jehkic28y.css';
import '../../css/f/fszl4kf6j.css';
import '../../css/h/hugh8jbpc.css';
import '../../css/c/c0vuimrvq.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jehkic28y"/><path class="fszl4kf6j"/><path class="hugh8jbpc"/><path class="c0vuimrvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:garage-outline"} {...others} />);
}

export default Component;
