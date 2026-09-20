import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usngqit7o.css';
import '../../css/k/kyjj1r1_l.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="usngqit7o"/><path clip-rule="evenodd" class="kyjj1r1_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:perspective-dark"} {...others} />);
}

export default Component;
