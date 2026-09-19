import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a71i2er_j.css';
import '../../css/m/mb98_4b0v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="a71i2er_j"/><path class="mb98_4b0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-hands-bold"} {...others} />);
}

export default Component;
