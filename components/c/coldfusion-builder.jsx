import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cao2c2b5u.css';
import '../../css/d/dlwhxsm1r.css';
import '../../css/v/vb7gojb-k.css';
import '../../css/j/jmon4qjrz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGmAhx2dHO)"><path class="cao2c2b5u"/><path clip-rule="evenodd" class="dlwhxsm1r"/><path clip-rule="evenodd" class="vb7gojb-k"/></g><defs><clipPath id="SVGmAhx2dHO"><path class="jmon4qjrz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:coldfusion-builder"} {...others} />);
}

export default Component;
