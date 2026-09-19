import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w9qny512t.css';
import '../../css/h/hq_1mgfja.css';
import '../../css/x/x32cg2a4u.css';
import '../../css/u/ub643timb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="w9qny512t"/><path class="hq_1mgfja"/><path clip-rule="evenodd" class="x32cg2a4u"/><path class="ub643timb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-kneeling-facing-right"} {...others} />);
}

export default Component;
