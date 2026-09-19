import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu9kzcb1b.css';
import '../../css/e/effisz2bi.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d1wgedbgv.css';
import '../../css/p/p-pnrrbfv.css';
import '../../css/s/sqx1f5b2y.css';
import '../../css/o/oayprqbaf.css';
import '../../css/m/mqii8lbvy.css';
import '../../css/d/d_8hszbxr.css';
import '../../css/s/synbtsves.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="gu9kzcb1b"/><clipPath id="SVGlgah6cRj"><circle class="effisz2bi"/></clipPath><g clip-path="url(#SVGlgah6cRj)" clip-rule="evenodd" class="d2kvgvbvc"><path class="d1wgedbgv"/><path class="p-pnrrbfv"/><path class="sqx1f5b2y"/><path class="oayprqbaf"/><path class="mqii8lbvy"/><ellipse class="d_8hszbxr"/><path class="synbtsves"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:pencil"} {...others} />);
}

export default Component;
