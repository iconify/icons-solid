import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6xf84byj.css';
import '../../css/s/s43d_mb-w.css';
import '../../css/j/jphoce4-e.css';
import '../../css/u/ut4n1hzlo.css';

const viewBox = {"width":108.236,"height":107.06};
const content = `<defs><clipPath id="SVGffGSldUJ" clipPathUnits="userSpaceOnUse"><path class="m6xf84byj"/></clipPath></defs><g clip-path="url(#SVGffGSldUJ)" transform="matrix(.35278 0 0 -.35278 -73.762 177.44)" class="s43d_mb-w"><path class="jphoce4-e"/><path class="ut4n1hzlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wakapi"} {...others} />);
}

export default Component;
