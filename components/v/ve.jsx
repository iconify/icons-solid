import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2n2fpb7c.css';
import '../../css/d/d-lgzvbiv.css';
import '../../css/r/r8ryz1bom.css';
import '../../css/r/rgb_vnb-b.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="d2n2fpb7c"/><path class="d-lgzvbiv"/><path class="r8ryz1bom"/><path class="rgb_vnb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ve"} {...others} />);
}

export default Component;
