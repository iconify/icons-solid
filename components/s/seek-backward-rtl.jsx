import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tpr0bvb0k.css';
import '../../css/k/kiehcdbvr.css';
import '../../css/v/vmdz79bcv.css';
import '../../css/j/j2rgm4wke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tpr0bvb0k"/><path class="kiehcdbvr"/><rect class="vmdz79bcv"/><path class="j2rgm4wke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-backward-rtl"} {...others} />);
}

export default Component;
