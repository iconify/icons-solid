import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbk05b36b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xqqfccbvi.css';
import '../../css/i/idanhrb6r.css';
import '../../css/b/bv-ylbb0q.css';
import '../../css/r/rx5_dzb2d.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGSJkC5dXi"><path class="nbk05b36b"/></clipPath></defs><g clip-path="url(#SVGSJkC5dXi)" transform="scale(.9375)" class="d2kvgvbvc"><path class="xqqfccbvi"/><path class="idanhrb6r"/><path class="bv-ylbb0q"/><path class="rx5_dzb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tl-4x3"} {...others} />);
}

export default Component;
