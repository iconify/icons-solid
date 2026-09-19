import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1nr_xbcr.css';
import '../../css/w/w3bam3b0k.css';
import '../../css/k/kx1su814z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="x1nr_xbcr"/><path class="w3bam3b0k"/><path class="kx1su814z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-with-white-cane-facing-right"} {...others} />);
}

export default Component;
