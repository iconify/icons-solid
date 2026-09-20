import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b8agt59nb.css';
import '../../css/k/ko9ijwb2u.css';
import '../../css/d/d3d2-0p_d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="b8agt59nb"/><path class="ko9ijwb2u"/><circle class="d3d2-0p_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-places-mountain-sun-landmark-mountain-place"} {...others} />);
}

export default Component;
