import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gko_7xb1b.css';
import '../../css/c/c1k-kccca.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="gko_7xb1b"/><path class="c1k-kccca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:leafy-green"} {...others} />);
}

export default Component;
