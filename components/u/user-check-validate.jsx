import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oi_86pbvf.css';
import '../../css/v/vnka8dd3q.css';
import '../../css/e/e1he_ij6k.css';
import '../../css/c/cr_g8vbgw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="oi_86pbvf"/><path class="vnka8dd3q"/><path class="e1he_ij6k"/><path class="cr_g8vbgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-check-validate"} {...others} />);
}

export default Component;
