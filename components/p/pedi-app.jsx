import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xaxo1ib7v.css';
import '../../css/m/mdxgoebbo.css';

const viewBox = {"width":228,"height":228};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGjQSJVcMA)"><path class="xaxo1ib7v"/></g><defs><clipPath id="SVGjQSJVcMA"><path class="mdxgoebbo"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pedi-app"} {...others} />);
}

export default Component;
