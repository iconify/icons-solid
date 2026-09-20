import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-salgbqh.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eu2ox9bfd.css';
import '../../css/l/l4pxmxvfs.css';
import '../../css/k/k0evexoqr.css';
import '../../css/t/tqzbydamd.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGsrg0ndkk" width="18" height="18" x="3" y="3" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="f-salgbqh"/></mask><g class="ft5dv1b6b"><g mask="url(#SVGsrg0ndkk)"><path class="eu2ox9bfd"/></g><path class="l4pxmxvfs"/><circle class="k0evexoqr"/><path class="tqzbydamd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-load-box-duotone-line"} {...others} />);
}

export default Component;
