import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y776aybet.css';
import '../../css/c/cpnj0vbtd.css';
import '../../css/q/q4r-bjftq.css';
import '../../css/h/hxt-qk23l.css';
import '../../css/o/oq_a7uwob.css';
import '../../css/a/aqlrn6btr.css';

const viewBox = {"width":54,"height":80};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGDSYAXqcP)"><path class="y776aybet"/><path class="cpnj0vbtd"/><path class="q4r-bjftq"/><path class="hxt-qk23l"/><path class="oq_a7uwob"/></g><defs><clipPath id="SVGDSYAXqcP"><path class="aqlrn6btr"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:figma"} {...others} />);
}

export default Component;
