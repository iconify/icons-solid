import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/isv_boq8z.css';
import '../../css/h/h9s5--3pf.css';
import '../../css/k/k3a0r8b1f.css';
import '../../css/p/pljx_gb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="isv_boq8z"/><path class="h9s5--3pf"/><path class="k3a0r8b1f"/><path class="pljx_gb_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-edit-effects"} {...others} />);
}

export default Component;
