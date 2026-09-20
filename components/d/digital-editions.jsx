import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ltvkkachx.css';
import '../../css/u/ui_lbzv2z.css';
import '../../css/x/x5p7r_5lb.css';
import '../../css/r/rs02r-b2i.css';
import '../../css/j/jmon4qjrz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGmAhx2dHO)"><path class="ltvkkachx"/><path clip-rule="evenodd" class="ui_lbzv2z"/><path class="x5p7r_5lb"/><path class="rs02r-b2i"/></g><defs><clipPath id="SVGmAhx2dHO"><path class="jmon4qjrz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:digital-editions"} {...others} />);
}

export default Component;
