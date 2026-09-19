import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rouiqnbvi.css';
import '../../css/l/lxa7bxwkb.css';

const viewBox = {"width":32,"height":33};
const content = `<g class="cuyn6tgcc"><path class="rouiqnbvi"/><path class="lxa7bxwkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:keycap-5"} {...others} />);
}

export default Component;
