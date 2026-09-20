import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zamxrp19a.css';
import '../../css/r/rvmink5sm.css';

const viewBox = {"width":358,"height":309};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGpdgfheTo)"><path class="zamxrp19a"/></g><defs><clipPath id="SVGpdgfheTo"><path class="rvmink5sm"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:axiom-light"} {...others} />);
}

export default Component;
