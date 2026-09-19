import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bvwfqm4dd.css';
import '../../css/e/eahjtuzlp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="bvwfqm4dd"/><path class="eahjtuzlp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:anxious-face-with-sweat"} {...others} />);
}

export default Component;
