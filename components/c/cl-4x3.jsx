import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbk05b36b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q77yl6frw.css';
import '../../css/g/g72i37taz.css';
import '../../css/s/spcwryfwg.css';
import '../../css/e/e56t8bccj.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGSJkC5dXi"><path class="nbk05b36b"/></clipPath></defs><g clip-path="url(#SVGSJkC5dXi)" transform="scale(.9375)" class="d2kvgvbvc"><path class="q77yl6frw"/><path class="g72i37taz"/><path class="spcwryfwg"/><path class="e56t8bccj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cl-4x3"} {...others} />);
}

export default Component;
