import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2qrjdgdm.css';
import '../../css/h/h149f_4lx.css';
import '../../css/z/zdvib58rb.css';
import '../../css/r/rx8s-dbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="h2qrjdgdm"/><path class="h149f_4lx"/><rect class="zdvib58rb"/><path class="rx8s-dbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bank"} {...others} />);
}

export default Component;
