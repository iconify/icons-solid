import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/u/ugmzmyd4c.css';
import '../../css/q/qy1y8pb_u.css';
import '../../css/p/pv6anpb3c.css';
import '../../css/c/cx6nujpkp.css';

const viewBox = {"width":429,"height":171};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG4E4M1cCc)" class="ivjvz2eii"><path clip-rule="evenodd" class="ugmzmyd4c"/><path class="qy1y8pb_u"/><path clip-rule="evenodd" class="pv6anpb3c"/></g><defs><clipPath id="SVG4E4M1cCc"><path class="cx6nujpkp"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:affirm-dark"} {...others} />);
}

export default Component;
