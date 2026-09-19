import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jn7i9jbvg.css';
import '../../css/w/wf8ebywlw.css';
import '../../css/u/u45aizbtd.css';
import '../../css/u/u3smvcc8q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="jn7i9jbvg"/><path class="wf8ebywlw"/><path class="u45aizbtd"/><path class="u3smvcc8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:exploding-head"} {...others} />);
}

export default Component;
