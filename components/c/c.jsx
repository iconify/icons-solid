import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0i0-mbht.css';
import '../../css/b/bs0fj3hht.css';
import '../../css/i/i2bi8-bcs.css';
import '../../css/h/h1u6hdcag.css';
import '../../css/e/ell914bgh.css';

const viewBox = {"width":306,"height":345};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG7ITmMbVH)"><path class="q0i0-mbht"/><path class="bs0fj3hht"/><path class="i2bi8-bcs"/><path class="h1u6hdcag"/></g><defs><clipPath id="SVG7ITmMbVH"><path class="ell914bgh"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:c"} {...others} />);
}

export default Component;
