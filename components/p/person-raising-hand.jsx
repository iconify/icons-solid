import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tzp_eqb2b.css';
import '../../css/j/jpym14k6j.css';
import '../../css/r/rjoq_2one.css';
import '../../css/m/mr62tjban.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="tzp_eqb2b"/><path class="jpym14k6j"/><path class="rjoq_2one"/><path class="mr62tjban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-raising-hand"} {...others} />);
}

export default Component;
