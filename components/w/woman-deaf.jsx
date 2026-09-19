import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wik-_ybeo.css';
import '../../css/x/xtxxglbth.css';
import '../../css/r/rf9z3abdj.css';
import '../../css/m/m9ocypb3k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="wik-_ybeo"/><path class="xtxxglbth"/><path class="rf9z3abdj"/><path class="m9ocypb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-deaf"} {...others} />);
}

export default Component;
