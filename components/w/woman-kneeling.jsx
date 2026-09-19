import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owjrhcbax.css';
import '../../css/k/k2_iy9bvq.css';
import '../../css/y/y0wp3xbnn.css';
import '../../css/c/czpf2fbry.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="owjrhcbax"/><path class="k2_iy9bvq"/><path clip-rule="evenodd" class="y0wp3xbnn"/><path class="czpf2fbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-kneeling"} {...others} />);
}

export default Component;
