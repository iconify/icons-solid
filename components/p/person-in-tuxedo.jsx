import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mt_nkd3ul.css';
import '../../css/i/ie6eqgbeg.css';
import '../../css/j/jgfqngb4b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="mt_nkd3ul"/><path class="ie6eqgbeg"/><path class="jgfqngb4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-in-tuxedo"} {...others} />);
}

export default Component;
