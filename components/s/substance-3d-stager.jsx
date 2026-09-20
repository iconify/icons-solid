import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zuonk99di.css';
import '../../css/o/oq_8t9bjb.css';
import '../../css/u/uay5kkbma.css';

const viewBox = {"width":32,"height":31};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGv2VBXd8T)"><path class="zuonk99di"/><path class="oq_8t9bjb"/></g><defs><clipPath id="SVGv2VBXd8T"><path class="uay5kkbma"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:substance-3d-stager"} {...others} />);
}

export default Component;
