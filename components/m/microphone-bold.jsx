import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9sfnjb3h.css';
import '../../css/g/g1z6xhtcj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="l9sfnjb3h"/><path class="g1z6xhtcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:microphone-bold"} {...others} />);
}

export default Component;
