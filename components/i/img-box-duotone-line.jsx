import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7_lljqrr.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bg7-y0j0n.css';
import '../../css/q/qc3x1gn8n.css';
import '../../css/k/k0evexoqr.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGQm2hDcbO" width="18" height="18" x="3" y="3" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="y7_lljqrr"/></mask><g class="ft5dv1b6b"><g mask="url(#SVGQm2hDcbO)"><path class="bg7-y0j0n"/></g><path class="qc3x1gn8n"/><circle class="k0evexoqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-box-duotone-line"} {...others} />);
}

export default Component;
