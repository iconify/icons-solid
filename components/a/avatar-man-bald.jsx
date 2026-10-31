import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hhl_8y8lj.css';
import '../../css/i/i9gtl7m_b.css';
import '../../css/g/g5dgrab9a.css';
import '../../css/n/ndwg9bb9v.css';
import '../../css/b/bs1xk8baz.css';
import '../../css/d/dl4me3bdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hhl_8y8lj wm-shadow"/><path class="i9gtl7m_b"/><path class="g5dgrab9a"/><path class="ndwg9bb9v"/><path class="bs1xk8baz"/><path class="dl4me3bdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-man-bald"} {...others} />);
}

export default Component;
