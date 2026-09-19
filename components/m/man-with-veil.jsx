import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epw5b4wvf.css';
import '../../css/k/kagnzju5h.css';
import '../../css/t/t8k7tzs9g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="epw5b4wvf"/><path class="kagnzju5h"/><path class="t8k7tzs9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-with-veil"} {...others} />);
}

export default Component;
