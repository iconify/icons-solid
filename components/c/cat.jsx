import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yyic2nb9l.css';
import '../../css/n/nbkj2hbvt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="yyic2nb9l"/><path class="nbkj2hbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:cat"} {...others} />);
}

export default Component;
