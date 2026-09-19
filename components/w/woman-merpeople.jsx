import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcfp8hirx.css';
import '../../css/d/deqw0i4qc.css';
import '../../css/c/clj6o8p1e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="vcfp8hirx"/><path class="deqw0i4qc"/><path class="clj6o8p1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-merpeople"} {...others} />);
}

export default Component;
