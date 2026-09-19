import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bfy1y561d.css';
import '../../css/s/s0fyeybfs.css';
import '../../css/d/d2q5wabcy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="bfy1y561d"/><path class="s0fyeybfs"/><path class="d2q5wabcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-technologist"} {...others} />);
}

export default Component;
