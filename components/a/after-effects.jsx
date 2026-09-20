import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbm5v1bij.css';
import '../../css/v/vd_z2e_fq.css';
import '../../css/n/n_-89i9ig.css';

const viewBox = {"width":83,"height":80};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGRJNxRbwH)"><path class="qbm5v1bij"/><path class="vd_z2e_fq"/></g><defs><clipPath id="SVGRJNxRbwH"><path class="n_-89i9ig"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:after-effects"} {...others} />);
}

export default Component;
