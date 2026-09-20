import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gsmehab_t.css';
import '../../css/z/z87jznbuv.css';
import '../../css/c/chmyan-ue.css';

const viewBox = {"width":175,"height":129};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGmaVfydlr)" class="cuyn6tgcc"><path class="gsmehab_t"/><path class="z87jznbuv"/></g><defs><clipPath id="SVGmaVfydlr"><path class="chmyan-ue"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:affirm"} {...others} />);
}

export default Component;
