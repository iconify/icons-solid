import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p00vhgb_c.css';
import '../../css/c/c25pz6-0h.css';
import '../../css/g/g47p4b7he.css';
import '../../css/h/hz4-vbbjh.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGXEmuQbsG)" class="p00vhgb_c"><path class="c25pz6-0h"/><path class="g47p4b7he"/></g><defs><clipPath id="SVGXEmuQbsG"><rect class="hz4-vbbjh"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:databasus"} {...others} />);
}

export default Component;
