import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbzq34z6d.css';
import '../../css/f/fwm_o_cit.css';
import '../../css/t/ta34zub4x.css';
import '../../css/b/bzm0vxl8k.css';
import '../../css/h/h0oqh_bpy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bbzq34z6d"/><path class="fwm_o_cit"/><path class="ta34zub4x"/><path class="bzm0vxl8k"/><path class="h0oqh_bpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bacteria-virus-cells-biology"} {...others} />);
}

export default Component;
