import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7qalcvkx.css';
import '../../css/z/zstsy57rt.css';
import '../../css/e/e9-d_ex8e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="e7qalcvkx"/><path class="zstsy57rt"/><path class="e9-d_ex8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:arrow-square"} {...others} />);
}

export default Component;
